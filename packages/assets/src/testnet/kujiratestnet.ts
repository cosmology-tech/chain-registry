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
            'ibc/45092B934DF5C3D9B7DDA484E54E56971314C63FBE72C6DAFD5347BC1F553FB2',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      base: 'ibc/45092B934DF5C3D9B7DDA484E54E56971314C63FBE72C6DAFD5347BC1F553FB2',
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
            channel_id: 'channel-3758',
            base_denom: 'uatom',
            chain_name: 'cosmoshubtestnet'
          },
          chain: {
            channel_id: 'channel-577'
          }
        }
      ]
    }
  ]
};
export default assets;
