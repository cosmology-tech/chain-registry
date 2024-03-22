import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'kujiratestnet',
  assets: [
    {
      description:
        'The native staking and governance token of the Theta testnet version of the Cosmos Hub.',
      denom_units: [
        {
          denom:
            'ibc/C82173695F4C472A6F4EBF7369DFA69852A710834C24CEB7DF4DC90132B178E6',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/C82173695F4C472A6F4EBF7369DFA69852A710834C24CEB7DF4DC90132B178E6',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4004',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }
      ]
    }
  ]
};
export default assets;
