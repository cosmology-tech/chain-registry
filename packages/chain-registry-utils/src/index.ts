const { Hash } = require('@keplr-wallet/crypto');

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

  const prefix = prefixes.join("/");
  const denom = `${prefix}/${coinMinimalDenom}`;

  return (
    "ibc/" +
    Buffer.from(Hash.sha256(Buffer.from(denom)))
      .toString("hex")
      .toUpperCase()
  );
};

const findInfo = (ibc, to, from) =>
  ibc.find(i =>
    i['chain-1']['chain-name'] === from
    &&
    i['chain-2']['chain-name'] === to
  );

export interface IBCChainInfo {
  "chain-name": string;
  "client-id": string;
  "connection-id": string;
};

export interface IBCChannelPortAndChannel {
  "channel-id": string;
  "port-id": string;
}
export interface IBCChannelInfo {
  "chain-1": IBCChannelPortAndChannel;
  "chain-2": IBCChannelPortAndChannel;
  ordering: string;
  version: string;
  tags?: {
    [key: string]: string;
  }
};

export interface IBCInfo {
  $schema: string;
  "chain-1": IBCChainInfo;
  "chain-2": IBCChainInfo;
  channels: IBCChannelInfo[];
}

export const getIbcInfo = (ibc: IBCInfo[], chain: string, counterparty: string): IBCInfo => {
  return findInfo(ibc, chain, counterparty)
    || findInfo(ibc, counterparty, chain);
};

export const getTransferChannel = (info: IBCInfo) => {
  return info.channels.find(
    channel => channel['chain-1']['port-id'] === 'transfer'
      &&
      channel['chain-2']['port-id'] === 'transfer'
  );
};

export const getIbcDenom = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: any[],
  symbol: string
): string => {
  const ibcInfo = getIbcInfo(ibc, chain, counterparty);
  if (ibcInfo) {
    const channel = getTransferChannel(ibcInfo);
    if (!channel) {
      return;
    }
    let channelInfo;
    if (ibcInfo['chain-1']['chain-name'] === chain) {
      channelInfo = channel['chain-1'];
    } else {
      channelInfo = channel['chain-2'];
    }

    const assetInfo = assets.find(({ chain_name }) => chain_name === counterparty);
    if (!assetInfo) {
      return;
    }
    const token = assetInfo.assets.find(a => a.symbol === symbol);

    if (!token) return;

    return ibcDenom([
      {
        portId: channelInfo['port-id'],
        channelId: channelInfo['channel-id']
      }
    ], token.base);
  }
};

export const getIbcDenomByBase = (
  ibc: IBCInfo[],
  chain: string,
  counterparty: string,
  assets: any[],
  base: string
): string => {
  const ibcInfo = getIbcInfo(ibc, chain, counterparty);
  if (ibcInfo) {
    const channel = getTransferChannel(ibcInfo);
    if (!channel) {
      return;
    }
    let channelInfo;
    if (ibcInfo['chain-1']['chain-name'] === chain) {
      channelInfo = channel['chain-1'];
    } else {
      channelInfo = channel['chain-2'];
    }

    const assetInfo = assets.find(({ chain_name }) => chain_name === counterparty);
    if (!assetInfo) {
      return;
    }

    return ibcDenom([
      {
        portId: channelInfo['port-id'],
        channelId: channelInfo['channel-id']
      }
    ], base);
  }
};

export const getIbcAssets = (
  chainName: string,
  ibc: IBCInfo[],
  assets: any[]
) => {

  const chainIbcInfo = ibc.filter(i => {
    return i['chain-1']['chain-name'] === chainName ||
      i['chain-2']['chain-name'] === chainName
  });

  return chainIbcInfo.map(ibcInfo => {

    const counterpartyIs = ibcInfo['chain-1']['chain-name'] === chainName ? 'chain-2' : 'chain-1';
    const chainIs = ibcInfo['chain-1']['chain-name'] === chainName ? 'chain-1' : 'chain-2';

    const counterparty = ibcInfo[counterpartyIs]['chain-name'];
    const counterpartyIbc = ibcInfo[counterpartyIs];
    const chainIbc = ibcInfo[chainIs];

    const counterpartyAssets = assets.find(a => {
      return a.chain_name === counterparty
    });

    if (!counterpartyAssets) {
      console.warn('asset not found: ' + counterparty);
      return;
    }

    const ibcAssets = counterpartyAssets
      .assets.filter(a => !a.base.startsWith('cw20:'))
      .map(asset => {
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
        newAsset.denom_units = newAsset.denom_units.map(unit => {
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
      assets: ibcAssets,
    };
  }).filter(Boolean);
};