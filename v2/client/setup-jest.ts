import nock from 'nock';

import { assets, chains, ibc } from './test-utils';

const baseUrl = 'https://raw.githubusercontent.com';


beforeAll(() => {
  // 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/osmosis/chain.json',
  // 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/osmosis/assetlist.json',
  // 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/juno/assetlist.json',
  // 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/secretnetwork/assetlist.json',
  // 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/_IBC/juno-osmosis.json',
  // 'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/_IBC/osmosis-secretnetwork.json'
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/osmosis/chain.json')
    .reply(200, chains.find(c => c.chain_name === 'osmosis'));
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/osmosis/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'osmosis'));

  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/stargaze/chain.json')
    .reply(200, chains.find(c => c.chain_name === 'stargaze'));
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/stargaze/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'stargaze'));

  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/juno/chain.json')
    .reply(200, chains.find(c => c.chain_name === 'juno'));
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/juno/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'juno'));
  
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/secretnetwork/assetlist.json')
    .reply(200, assets.find(c => c.chain_name === 'secretnetwork'));
    
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/_IBC/juno-osmosis.json')
    .reply(200, ibc.find(i => i.chain_1.chain_name === 'juno' && i.chain_2.chain_name==='osmosis'));
  nock(baseUrl)
    .get('/chain-registry/chain-registry/main/registries/minimal/_IBC/osmosis-secretnetwork.json')
    .reply(200, ibc.find(i => i.chain_1.chain_name === 'osmosis' && i.chain_2.chain_name==='secretnetwork'));
});


afterAll(() => {
  nock.restore();
});