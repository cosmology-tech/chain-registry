import nock from 'nock';

import { assetLists, chains, ibc } from './test-utils';

const baseUrl = 'https://raw.githubusercontent.com';


beforeAll(() => {
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/assetlist.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/assetlist.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/juno-osmosis.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json'
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/osmosis/chain.json')
    .reply(200, chains.find(c => c.chainName === 'osmosis'));
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/osmosis/assetlist.json')
    .reply(200, assetLists.find(c => c.chainName === 'osmosis'));

  nock(baseUrl)
    .get('/cosmos/chain-registry/master/stargaze/chain.json')
    .reply(200, chains.find(c => c.chainName === 'stargaze'));
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/stargaze/assetlist.json')
    .reply(200, assetLists.find(c => c.chainName === 'stargaze'));

  nock(baseUrl)
    .get('/cosmos/chain-registry/master/juno/chain.json')
    .reply(200, chains.find(c => c.chainName === 'juno'));
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/juno/assetlist.json')
    .reply(200, assetLists.find(c => c.chainName === 'juno'));
  
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/secretnetwork/assetlist.json')
    .reply(200, assetLists.find(c => c.chainName === 'secretnetwork'));
    
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/_IBC/juno-osmosis.json')
    .reply(200, ibc.find(i => i.chain1.chainName === 'juno' && i.chain2.chainName==='osmosis'));
  nock(baseUrl)
    .get('/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json')
    .reply(200, ibc.find(i => i.chain1.chainName === 'osmosis' && i.chain2.chainName==='secretnetwork'));
});


afterAll(() => {
  nock.restore();
});