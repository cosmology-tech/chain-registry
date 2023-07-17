import nock from 'nock';

import { ChainRegistryClient } from '../src/registry';

const osmosisChainData = {
  $schema: '../chain.schema.json',
  chain_name: 'osmosis',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://osmosis.zone/',
  update_link:
    'https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json',
  pretty_name: 'Osmosis',
  chain_id: 'osmosis-1',
  bech32_prefix: 'osmo',
  daemon_name: 'osmosisd',
  node_home: '$HOME/.osmosisd',
  key_algos: ['secp256k1'],
  slip44: 118
};

const osmosisAssetlistData = {
  $schema: '../assetlist.schema.json',
  chain_name: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom: 'uosmo',
          exponent: 0
        },
        {
          denom: 'osmo',
          exponent: 6
        }
      ],
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking']
    }
  ]
};

const baseUrl = 'https://raw.githubusercontent.com';

function nockByChainName(chainName: string, chainData, assetlistData) {
  const chainDataPath = `/cosmos/chain-registry/master/${chainName}/chain.json`;
  const assetlistDataPath = `/cosmos/chain-registry/master/${chainName}/assetlist.json`;
  nock(baseUrl).get(chainDataPath).reply(200, chainData);
  nock(baseUrl).get(assetlistDataPath).reply(200, assetlistData);
}

describe('Test client', () => {
  let client;
  beforeAll(async () => {
    nockByChainName('osmosis', osmosisChainData, osmosisAssetlistData);
    client = new ChainRegistryClient({
      chainNames: ['osmosis']
    });
    await client.fetchUrls();
  });

  it('Test mock fetching chain data', () => {
    const chainInfo = client.getChainInfo('osmosis');
    expect(chainInfo.chainName).toEqual('osmosis');
  });

  it('Test mock fetching asset list', () => {
    const chainInfo = client.getChainInfo('osmosis');
    expect(chainInfo.nativeAssetLists.assets.length).toEqual(1);
  });
});
