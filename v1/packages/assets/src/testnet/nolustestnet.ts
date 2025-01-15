import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'nolustestnet',
  assets: [
    {
      description: 'The native token of Neutron chain',
      denom_units: [{
          denom: 'ibc/0C698C8970DB4C539455E5225665A804F6338753211319E44BAD39758B238695',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0C698C8970DB4C539455E5225665A804F6338753211319E44BAD39758B238695',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1061',
            base_denom: 'untrn',
            chain_name: 'neutrontestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain',
      denom_units: [{
          denom: 'ibc/0C698C8970DB4C539455E5225665A804F6338753211319E44BAD39758B238695',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0C698C8970DB4C539455E5225665A804F6338753211319E44BAD39758B238695',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1061',
            base_denom: 'untrn',
            chain_name: 'neutrontestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8272',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8272',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8272',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8272',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    }
  ]
};
export default assets;
    