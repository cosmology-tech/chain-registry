import { AssetList, IBCData, ChannelInfo, Asset } from '@chain-registry/v2-types';
import { sha256 } from 'sha.js';
import { getNativeAssets } from './utils';

export const ibcDenom = (
  paths: {
    portId: string;
    channelId: string;
  }[],
  coinMinimalDenom: string
): string => {
  const prefixes = [];
  for (const path of paths) {
    prefixes.push(`${path.portId}/${path.channelId}`);
  }

  const prefix = prefixes.join('/');
  const denom = `${prefix}/${coinMinimalDenom}`;

  return (
    'ibc/' +
    Buffer.from(
      new Uint8Array(new sha256().update(Buffer.from(denom)).digest())
    )
      .toString('hex')
      .toUpperCase()
  );
};

const findInfo = (ibc: IBCData[], to: string, from: string) =>
  ibc.find((i) => i.chain1.chainName === from && i.chain2.chainName === to);

export const getIBCData = (
  ibc: IBCData[],
  chain: string,
  counterparty: string
): IBCData => {
  return (
    findInfo(ibc, chain, counterparty) || findInfo(ibc, counterparty, chain)
  );
};

export const getTransferChannel = (info: IBCData) => {
  return info.channels.find(
    (channel) =>
      channel.chain1.portId === 'transfer' &&
      channel.chain2.portId === 'transfer'
  );
};

export const getNonTransferChannel = (info: IBCData) => {
  return info.channels.find(
    (channel) =>
      (channel.chain1.portId !== 'transfer' &&
        channel.chain2.portId === 'transfer') ||
      (channel.chain1.portId === 'transfer' &&
        channel.chain2.portId !== 'transfer')
  );
};

export const getWasmChannel = (info: IBCData) => {
  return info.channels.find(
    (channel) =>
      (channel.chain1.portId.startsWith('wasm.') &&
        channel.chain2.portId === 'transfer') ||
      (channel.chain1.portId === 'transfer' &&
        channel.chain2.portId.startsWith('wasm'))
  );
};

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
  ? Array<DeepPartial<U>>       // Makes elements of arrays DeepPartial
  : T[P] extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>> // Handles readonly arrays
  : T[P] extends object
  ? DeepPartial<T[P]>            // Makes properties of objects DeepPartial
  : T[P];                         // Leaves non-object types unchanged
};

interface AssetListHash {
  [key: string]: DeepPartial<AssetList>[];
}

export const getIbcAssetPath = (
  ibc: IBCData[],
  chain: string,
  counterparty: string,
  assets: AssetList[],
  base: string
): ChannelInfo[] => {
  const ibcInfo = getIBCData(ibc, chain, counterparty);
  if (!ibcInfo) {
    return [];
  }

  const channel = base.startsWith('cw20:')
    ? getWasmChannel(ibcInfo)
    : getTransferChannel(ibcInfo);

  if (!channel) {
    return [];
  }
  let channelInfo: ChannelInfo
  if (ibcInfo.chain1.chainName === chain) {
    channelInfo = channel.chain1;
  } else {
    channelInfo = channel.chain2;
  }

  const memo = [channelInfo];

  const assetList = assets.find(
    ({ chainName }) => chainName === counterparty
  );
  if (!assetList) {
    return memo;
  }
  const asset = assetList.assets.find((asset) => asset.base === base);
  if (!asset) {
    console.log(`no ${base} found in ${counterparty}`);
    return memo;
  }

  const traces =
    asset.traces?.filter?.((trace) => {
      return trace.type === 'ibc' || trace.type === 'ibc-cw20';
    }) ?? [];

  if (!traces.length) {
    return memo;
  }

  if (traces.length > 1) {
    console.log(traces);
    console.warn('contact maintainers: multi-hop not yet supported');
  }

  const [trace] = traces;
  return [
    ...memo,
    ...getIbcAssetPath(
      ibc,
      counterparty,
      trace.counterparty.chainName,
      assets,
      trace.counterparty.baseDenom
      // base
    )
  ];
};

export const getIbcDenomByBase = (
  ibc: IBCData[],
  chain: string,
  counterparty: string,
  assets: AssetList[],
  base: string
): string => {
  const ibcInfo = getIBCData(ibc, chain, counterparty);
  if (ibcInfo) {
    const channel = base.startsWith('cw20:')
      ? getWasmChannel(ibcInfo)
      : getTransferChannel(ibcInfo);
    if (!channel) {
      return;
    }
    const ibcPath = getIbcAssetPath(ibc, chain, counterparty, assets, base);

    const assetList = assets.find(
      ({ chainName }) => chainName === counterparty
    );
    if (!assetList) {
      console.warn(`missing asset list for ${counterparty}`);
      // could be incorrect...
      return ibcDenom(ibcPath, base);
    }
    const asset = assetList.assets.find((asset) => asset.base === base);
    if (!asset) {
      console.warn(`no ${base} found in ${counterparty}`);
      return ibcDenom(ibcPath, base);
    }

    const ibcTrace = asset.traces?.find?.((trace) => trace.type === 'ibc');

    const baseDenom = ibcTrace?.counterparty?.baseDenom ?? asset.base;
    return ibcDenom(ibcPath, baseDenom);
  }
};

export const getIbcAssets = (
  chainName: string,
  ibc: IBCData[],
  assets: AssetList[]
): AssetList[] => {

  const chainIbcInfo = ibc.filter((i) => {
    return (
      i.chain1.chainName === chainName || i.chain2.chainName === chainName
    );
  });
  const ibcAssetLists = chainIbcInfo
    .map((ibcInfo) => {
      const counterpartyIs =
        ibcInfo.chain1.chainName === chainName ? 'chain2' : 'chain1';
      const chainIs =
        ibcInfo.chain1.chainName === chainName ? 'chain1' : 'chain2';

      const counterparty = ibcInfo[counterpartyIs].chainName;
      const counterpartyIbc = ibcInfo[counterpartyIs];
      const chainIbc = ibcInfo[chainIs];

      const baseCounterpartyAssets = assets.find((a) => {
        return a.chainName === counterparty;
      });

      if (!baseCounterpartyAssets) {
        // console.warn('asset not found: ' + counterparty);
        return;
      }

      // const counterpartyAssets = baseCounterpartyAssets;
      const counterpartyAssets = {
        ...baseCounterpartyAssets,
        assets: baseCounterpartyAssets.assets.filter((a) => {
          if (
            // https://github.com/cosmos/chain-registry/issues/1535
            baseCounterpartyAssets.chainName === 'carbon' &&
            a.base.startsWith('ibc/')
          ) {
            return false;
          } else {
            return true;
          }
        })
      };

      const ibcAssets = counterpartyAssets.assets
        .filter((a) => !a.base.startsWith('cw20:'))
        .map((asset) => {
          const denom = getIbcDenomByBase(
            ibc,
            chainName,
            counterparty,
            //
            assets,
            asset.base
          );

          const newAsset = {
            ...asset
          };
          newAsset.base = denom;
          newAsset.denomUnits = newAsset.denomUnits.map((unit) => {
            if (unit.denom === asset.base) {
              const newUnit = {
                ...unit
              };
              newUnit.denom = denom;
              newUnit.aliases = [unit.denom];
              return newUnit;
            }
            return unit;
          });
          return newAsset;
        });

      const channel = getTransferChannel(ibcInfo);
      if (!channel) {
        return;
      }
      return {
        chain: {
          ...chainIbc,
          ...channel[chainIs]
        },
        counterparty: {
          ...counterpartyIbc,
          ...channel[counterpartyIs]
        },
        assets: ibcAssets
      };
    })
    .filter(Boolean);

  const hash = ibcAssetLists.reduce((m: any, v) => {
    m[v.chain.chainName] = m[v.chain.chainName] || [];
    const assets = v.assets
      .map((asset) => {
        try {
          return {
            ...asset,
            traces: [
              {
                type: 'ibc',
                counterparty: {
                  // source_channel
                  channel_id: v.counterparty.channelId,
                  // source_denom
                  base_denom:
                    asset.denomUnits[0]?.aliases?.[0] ??
                    asset.denomUnits[0].denom,
                  chain_name: v.counterparty.chainName
                  // port: v.counterparty.port_id
                },
                chain: {
                  // dst_denom
                  channel_id: v.chain.channelId
                  // chain_name: v.chain.chain_name,
                  // port: v.chain.port_id
                }
              }
            ]
          };
        } catch (e) {
          console.log('problem creating assets:');
          console.log(asset);
        }
      })
      .filter(Boolean);
    const obj = {
      ...v,
      assets
    };
    m[v.chain.chainName].push(obj);

    return m;
  }, {});

  return Object.keys(hash).map((chain) => {
    return {
      chainName: chain,
      assets: hash[chain].reduce((m: AssetList[], v: AssetList) => {
        return [...m, ...v.assets];
      }, [])
    };
  });
};

export const getCw20Assets = (
  chainName: string,
  ibc: IBCData[],
  assets: AssetList[]
): AssetList[] => {
  const chainIbcInfo = ibc.filter((i) => {
    return (
      i.chain1.chainName === chainName || i.chain2.chainName === chainName
    );
  });

  const cw20AssetLists = chainIbcInfo
    .map((ibcInfo) => {
      const counterpartyIs =
        ibcInfo.chain1.chainName === chainName ? 'chain2' : 'chain1';
      const chainIs =
        ibcInfo.chain1.chainName === chainName ? 'chain1' : 'chain2';

      const counterparty = ibcInfo[counterpartyIs].chainName;
      const counterpartyIbc = ibcInfo[counterpartyIs];
      const chainIbc = ibcInfo[chainIs];

      const counterpartyAssets = assets.find((a) => {
        return a.chainName === counterparty;
      });

      if (!counterpartyAssets) {
        // console.warn('asset not found: ' + counterparty);
        return;
      }

      const cw20Assets = counterpartyAssets.assets
        .filter((a) => a.base.startsWith('cw20:'))
        .map((asset) => {
          const denom = getIbcDenomByBase(
            ibc,
            chainName,
            counterparty,
            //
            assets,
            asset.base
          );

          const newAsset = {
            ...asset
          };
          newAsset.base = denom;
          newAsset.denomUnits = newAsset.denomUnits.map((unit) => {
            if (unit.denom === asset.base) {
              const newUnit = {
                ...unit
              };
              newUnit.denom = denom;
              newUnit.aliases = [unit.denom];
              return newUnit;
            }
            return unit;
          });
          return newAsset;
        });

      if (!cw20Assets.length) return;

      const channel = getWasmChannel(ibcInfo);
      if (!channel) {
        // console.warn(
        //   chainIbc.chain_name,
        //   '<>',
        //   counterpartyIbc.chain_name,
        //   'MISSING cw20 IBC info'
        // );
        return;
      }
      return {
        chain: {
          ...chainIbc,
          ...channel[chainIs]
        },
        counterparty: {
          ...counterpartyIbc,
          ...channel[counterpartyIs]
        },
        assets: cw20Assets
      };
    })
    .filter(Boolean);

  const hash: AssetListHash = cw20AssetLists.reduce((m: any, v) => {
    const assetList: any = v;
    m[assetList.chain.chainName] = m[assetList.chain.chainName] || [];
    const assets = assetList.assets
      .map((asset: Asset) => {
        try {
          return {
            ...asset,
            traces: [
              {
                type: 'ibc-cw20',
                counterparty: {
                  port: v.counterparty.portId,
                  // source_channel
                  channel_id: v.counterparty.channelId,
                  // source_denom
                  base_denom:
                    asset.denomUnits[0]?.aliases?.[0] ??
                    asset.denomUnits[0].denom,
                  chain_name: v.counterparty.chainName
                },
                chain: {
                  // dst_denom
                  port: v.chain.portId,
                  channel_id: v.chain.channelId
                  // chain_name: v.chain.chain_name,
                }
              }
            ]
          };
        } catch (e) {
          console.log('problem creating cw20 assets');
          console.log(asset);
        }
      })
      .filter(Boolean);
    const obj = {
      ...v,
      assets
    };
    m[v.chain.chainName].push(obj);

    return m;
  }, {});

  return Object.keys(hash).map((chain) => {
    return {
      chainName: chain,
      assets: hash[chain].reduce((m, v) => {
        return [...m, ...v.assets];
      }, [])
    };
  });
};

export const getAssetLists = (
  chainName: string,
  ibc: IBCData[],
  assets: AssetList[]
) => {
  const ibcAssetLists = getIbcAssets(chainName, ibc, assets);
  const cw20Assets = getCw20Assets(chainName, ibc, assets);

  return ibcAssetLists.reduce((m, v) => {
    const chain = v.chainName;
    const assets = [...v.assets];
    const cw20: AssetList = cw20Assets.find((a) => a.chainName === chain);
    if (cw20) {
      // @ts-ignore
      [].push.apply(assets, cw20.assets);
    }
    return [
      {
        chain_name: chain,
        assets
      },
      ...m
    ];
  }, []);
};

export const getNativeAssetLists = (
  chainName: string,
  ibc: IBCData[],
  _assets: AssetList[]
) => {
  const assets = getNativeAssets(_assets);
  const ibcAssetLists = getIbcAssets(chainName, ibc, assets);
  const cw20Assets = getCw20Assets(chainName, ibc, assets);

  return ibcAssetLists.reduce((m, v) => {
    const chain = v.chainName;
    const assets = [...v.assets];
    const cw20: AssetList = cw20Assets.find((a) => a.chainName === chain);
    if (cw20) {
      // @ts-ignore
      [].push.apply(assets, cw20.assets);
    }
    return [
      {
        chain_name: chain,
        assets
      },
      ...m
    ];
  }, []);
};
