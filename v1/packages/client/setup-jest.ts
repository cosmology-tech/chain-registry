import nock from 'nock';

import { assets, chains, ibc } from './test-utils';

const baseUrl = 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original';

beforeAll(() => {
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/assetlist.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/assetlist.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/juno-osmosis.json',
  // 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json'
  nock(baseUrl)
    .get('/osmosis/chain.json')
    .reply(200, chains.find(c => c.chain_name === 'osmosis'));
  nock(baseUrl)
    .get('/osmosis/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'osmosis'));

  nock(baseUrl)
    .get('/stargaze/chain.json')
    .reply(200, chains.find(c => c.chain_name === 'stargaze'));
  nock(baseUrl)
    .get('/stargaze/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'stargaze'));

  nock(baseUrl)
    .get('/juno/chain.json')
    .reply(200, chains.find(c => c.chain_name === 'juno'));
  nock(baseUrl)
    .get('/juno/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'juno'));
  
  nock(baseUrl)
    .get('/secretnetwork/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'secretnetwork'));
    
  nock(baseUrl)
    .get('/_IBC/juno-osmosis.json')
    .reply(200, ibc.find(i => i.chain_1.chain_name === 'juno' && i.chain_2.chain_name==='osmosis'));
  nock(baseUrl)
    .get('/_IBC/osmosis-secretnetwork.json')
    .reply(200, ibc.find(i => i.chain_1.chain_name === 'osmosis' && i.chain_2.chain_name==='secretnetwork'));
});


afterAll(() => {
  nock.restore();
});