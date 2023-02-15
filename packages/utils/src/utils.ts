import { AssetList, IBCInfo } from '@chain-registry/types';
import { sha256 } from 'sha.js';

export const ibcDenom = (
  paths: {
    port_id: string;
    channel_id: string;
  }[],
  coinMinimalDenom: string
): string => {
  const prefixes = [];
  for (const path of paths) {
    prefixes.push(`${path.port_id}/${path.channel_id}`);
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

const findInfo = (ibc, to, from) =>
  ibc.find((i) => i.chain_1.chain_name === from && i.chain_2.chain_name === to);

export const getIbcInfo = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string
): IBCInfo => {
  return (
    findInfo(ibc, chain, counterparty) || findInfo(ibc, counterparty, chain)
  );
};

export const getTransferChannel = (info: IBCInfo) => {
  return info.channels.find(
    (channel) =>
      channel.chain_1.port_id === 'transfer' &&
      channel.chain_2.port_id === 'transfer'
  );
};

export const getNonTransferChannel = (info: IBCInfo) => {
  return info.channels.find(
    (channel) =>
      (channel.chain_1.port_id !== 'transfer' &&
        channel.chain_2.port_id === 'transfer') ||
      (channel.chain_1.port_id === 'transfer' &&
        channel.chain_2.port_id !== 'transfer')
  );
};

export const getWasmChannel = (info: IBCInfo) => {
  return info.channels.find(
    (channel) =>
      (channel.chain_1.port_id.startsWith('wasm.') &&
        channel.chain_2.port_id === 'transfer') ||
      (channel.chain_1.port_id === 'transfer' &&
        channel.chain_2.port_id.startsWith('wasm'))
  );
};

export const getIbcAssetPath = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: AssetList[],
  base: string
) => {
  const ibcInfo = getIbcInfo(ibc, chain, counterparty);
  if (!ibcInfo) {
    return [];
  }

  const channel = base.startsWith('cw20:')
    ? getWasmChannel(ibcInfo)
    : getTransferChannel(ibcInfo);

  if (!channel) {
    return [];
  }
  let channelInfo;
  if (ibcInfo.chain_1.chain_name === chain) {
    channelInfo = channel.chain_1;
  } else {
    channelInfo = channel.chain_2;
  }

  const memo = [channelInfo];

  const assetList = assets.find(
    ({ chain_name }) => chain_name === counterparty
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
    throw new Error('contact maintainers: multi-hop not yet supported');
  }

  const [trace] = traces;
  return [
    ...memo,
    ...getIbcAssetPath(
      ibc,
      counterparty,
      trace.counterparty.chain_name,
      assets,
      trace.counterparty.base_denom
      // base
    )
  ];
};

export const getIbcDenomByBase = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: AssetList[],
  base: string
): string => {
  const ibcInfo = getIbcInfo(ibc, chain, counterparty);
  if (ibcInfo) {
    const channel = base.startsWith('cw20:')
      ? getWasmChannel(ibcInfo)
      : getTransferChannel(ibcInfo);
    if (!channel) {
      return;
    }
    const ibcPath = getIbcAssetPath(ibc, chain, counterparty, assets, base);

    const assetList = assets.find(
      ({ chain_name }) => chain_name === counterparty
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

    const baseDenom = ibcTrace?.counterparty?.base_denom ?? asset.base;
    return ibcDenom(ibcPath, baseDenom);
  }
};

export const getIbcAssets = (
  chainName: string,
  ibc: IBCInfo[],
  assets: AssetList[]
) => {
  const chainIbcInfo = ibc.filter((i) => {
    return (
      i.chain_1.chain_name === chainName || i.chain_2.chain_name === chainName
    );
  });
  const ibcAssetLists = chainIbcInfo
    .map((ibcInfo) => {
      const counterpartyIs =
        ibcInfo.chain_1.chain_name === chainName ? 'chain_2' : 'chain_1';
      const chainIs =
        ibcInfo.chain_1.chain_name === chainName ? 'chain_1' : 'chain_2';

      const counterparty = ibcInfo[counterpartyIs].chain_name;
      const counterpartyIbc = ibcInfo[counterpartyIs];
      const chainIbc = ibcInfo[chainIs];

      const counterpartyAssets = assets.find((a) => {
        return a.chain_name === counterparty;
      });

      if (!counterpartyAssets) {
        // console.warn('asset not found: ' + counterparty);
        return;
      }

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
          newAsset.denom_units = newAsset.denom_units.map((unit) => {
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

  const hash = ibcAssetLists.reduce((m, v) => {
    m[v.chain.chain_name] = m[v.chain.chain_name] || [];
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
                  channel_id: v.counterparty.channel_id,
                  // source_denom
                  base_denom:
                    asset.denom_units[0]?.aliases?.[0] ??
                    asset.denom_units[0].denom,
                  chain_name: v.counterparty.chain_name
                  // port: v.counterparty.port_id
                },
                chain: {
                  // dst_denom
                  channel_id: v.chain.channel_id
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
    m[v.chain.chain_name].push(obj);

    return m;
  }, {});

  return Object.keys(hash).map((chain) => {
    return {
      chain_name: chain,
      assets: hash[chain].reduce((m, v) => {
        return [...m, ...v.assets];
      }, [])
    };
  });
};

export const getCw20Assets = (
  chainName: string,
  ibc: IBCInfo[],
  assets: AssetList[]
) => {
  const chainIbcInfo = ibc.filter((i) => {
    return (
      i.chain_1.chain_name === chainName || i.chain_2.chain_name === chainName
    );
  });

  const cw20AssetLists = chainIbcInfo
    .map((ibcInfo) => {
      const counterpartyIs =
        ibcInfo.chain_1.chain_name === chainName ? 'chain_2' : 'chain_1';
      const chainIs =
        ibcInfo.chain_1.chain_name === chainName ? 'chain_1' : 'chain_2';

      const counterparty = ibcInfo[counterpartyIs].chain_name;
      const counterpartyIbc = ibcInfo[counterpartyIs];
      const chainIbc = ibcInfo[chainIs];

      const counterpartyAssets = assets.find((a) => {
        return a.chain_name === counterparty;
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
          newAsset.denom_units = newAsset.denom_units.map((unit) => {
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

  const hash = cw20AssetLists.reduce((m, v) => {
    m[v.chain.chain_name] = m[v.chain.chain_name] || [];
    const assets = v.assets
      .map((asset) => {
        try {
          return {
            ...asset,
            traces: [
              {
                type: 'ibc-cw20',
                counterparty: {
                  port: v.counterparty.port_id,
                  // source_channel
                  channel_id: v.counterparty.channel_id,
                  // source_denom
                  base_denom:
                    asset.denom_units[0]?.aliases?.[0] ??
                    asset.denom_units[0].denom,
                  chain_name: v.counterparty.chain_name
                },
                chain: {
                  // dst_denom
                  port: v.chain.port_id,
                  channel_id: v.chain.channel_id
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
    m[v.chain.chain_name].push(obj);

    return m;
  }, {});

  return Object.keys(hash).map((chain) => {
    return {
      chain_name: chain,
      assets: hash[chain].reduce((m, v) => {
        return [...m, ...v.assets];
      }, [])
    };
  });
};

export const getAssetLists = (
  chainName: string,
  ibc: IBCInfo[],
  assets: AssetList[]
) => {
  const ibcAssetLists = getIbcAssets(chainName, ibc, assets);
  const cw20Assets = getCw20Assets(chainName, ibc, assets);

  return ibcAssetLists.reduce((m, v) => {
    const chain = v.chain_name;
    const assets = [...v.assets];
    const cw20 = cw20Assets.find((a) => a.chain_name === chain);
    if (cw20) {
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
