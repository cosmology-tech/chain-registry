import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'jackaltestnet2',
  assets: [{
      description: 'The native token of Archway testnetwork',
      denom_units: [
        {
          denom: 'ibc/1C27F15E55A5190BB8272C1D3F3A165391209048922CF38C456C5D8E247FD7E7',
          exponent: 0,
          aliases: ['aconst']
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'ibc/1C27F15E55A5190BB8272C1D3F3A165391209048922CF38C456C5D8E247FD7E7',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-368',
            base_denom: 'aconst',
            chain_name: 'archwaytestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    }, {
      description: 'The native token of Archway testnetwork',
      denom_units: [
        {
          denom: 'ibc/1C27F15E55A5190BB8272C1D3F3A165391209048922CF38C456C5D8E247FD7E7',
          exponent: 0,
          aliases: ['aconst']
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'ibc/1C27F15E55A5190BB8272C1D3F3A165391209048922CF38C456C5D8E247FD7E7',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-368',
            base_denom: 'aconst',
            chain_name: 'archwaytestnet'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    }]
};
export default assets;
    