import { AssetList, IBCInfo } from '@chain-registry/types';
import { sha256 } from 'sha.js';

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

export const getIbcDenomByBase = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: AssetList[],
  base: string
): string => {
  const ibcInfo = getIbcInfo(ibc, chain, counterparty);
  if (ibcInfo) {
    const channel = getTransferChannel(ibcInfo);
    if (!channel) {
      return;
    }
    let channelInfo;
    if (ibcInfo.chain_1.chain_name === chain) {
      channelInfo = channel.chain_1;
    } else {
      channelInfo = channel.chain_2;
    }

    const assetList = assets.find(
      ({ chain_name }) => chain_name === counterparty
    );
    if (!assetList) {
      return;
    }

    const assetInfo = assetList.assets.find((asset) => {
      return asset.base === base;
    });

    // if (!assetInfo) {
    //   console.warn('missing referrenced asset');
    // }

    // TODO transition later!
    const traces = [];
    if (assetInfo.ibc) {
      traces.push({
        type: 'ibc',
        counterparty: {
          denom: assetInfo.ibc.source_denom,
          channel: assetInfo.ibc.source_channel
        },
        chain: {
          channel: assetInfo.ibc.dst_channel
        }
      });
    }
    if (assetInfo.traces && assetInfo.traces.length) {
      [].push.apply(traces, assetInfo.traces);
    }

    // console.log(transition);

    // if (transition.length) {
    //   return ibcDenom(
    //     [
    //       {
    //         portId: 'transfer',
    //         channelId: assetInfo.ibc.source_channel
    //       },
    //       {
    //         portId: channelInfo.port_id,
    //         channelId: channelInfo.channel_id
    //       }
    //     ],
    //     base
    //   );
    // }

    return ibcDenom(
      [
        {
          portId: channelInfo.port_id,
          channelId: channelInfo.channel_id
        }
      ],
      base
    );
  }
};

export const getIbcDenomByBaseForCw20 = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: AssetList[],
  base: string
): string => {
  const ibcInfo = getIbcInfo(ibc, chain, counterparty);
  if (ibcInfo) {
    const channel = getWasmChannel(ibcInfo);
    if (!channel) {
      return;
    }
    let channelInfo;
    if (ibcInfo.chain_1.chain_name === chain) {
      channelInfo = channel.chain_1;
    } else {
      channelInfo = channel.chain_2;
    }

    const assetInfo = assets.find(
      ({ chain_name }) => chain_name === counterparty
    );
    if (!assetInfo) {
      return;
    }

    return ibcDenom(
      [
        {
          portId: channelInfo.port_id,
          channelId: channelInfo.channel_id
        }
      ],
      base
    );
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
    const assets = v.assets.map((asset) => {
      return {
        ...asset,
        traces: [
          {
            type: 'ibc',
            counterparty: {
              // source_channel
              channel: v.counterparty.channel_id,
              // source_denom
              denom: asset.denom_units[0].aliases[0],
              chain_name: v.counterparty.chain_name
              // port: v.counterparty.port_id
            },
            chain: {
              // dst_denom
              channel: v.chain.channel_id
              // chain_name: v.chain.chain_name,
              // port: v.chain.port_id
            }
          }
        ]
      };
    });
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
          const denom = getIbcDenomByBaseForCw20(
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
    const assets = v.assets.map((asset) => {
      return {
        ...asset,
        traces: [
          {
            type: 'ibc',
            counterparty: {
              port: v.counterparty.port_id,
              // source_channel
              channel: v.counterparty.channel_id,
              // source_denom
              denom: asset.denom_units[0].aliases[0],
              chain_name: v.counterparty.chain_name
            },
            chain: {
              // dst_denom
              port: v.chain.port_id,
              channel: v.chain.channel_id
              // chain_name: v.chain.chain_name,
            }
          }
        ]
      };
    });
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
