import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'blg24',
      chainId: 'BLG24',
      clientId: '07-tendermint-12',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-3758',
      connectionId: 'connection-11098'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-111099',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }];
export default info;