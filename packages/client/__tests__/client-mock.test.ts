import nock from 'nock';

import assets from '../../../__fixtures__/assets.json';
import chains from '../../../__fixtures__/chains.json';
import { ChainRegistryClient } from '../src/registry';

const baseUrl = 'https://raw.githubusercontent.com';

function nockByChainName(chainName: string) {
  const chainDataPath = `/cosmos/chain-registry/master/${chainName}/chain.json`;
  const assetlistDataPath = `/cosmos/chain-registry/master/${chainName}/assetlist.json`;

  const chainData = chains.find((chain) => chain.chain_name === chainName);
  const assetlistData = assets.find((asset) => asset.chain_name === chainName);

  nock(baseUrl).get(chainDataPath).reply(200, chainData);
  nock(baseUrl).get(assetlistDataPath).reply(200, assetlistData);
}

describe('Test client', () => {
  let client;
  
  beforeAll(async () => {
    nockByChainName('stargaze');
    client = new ChainRegistryClient({
      chainNames: ['stargaze']
    });
    await client.fetchUrls();
  });

  afterAll(() => {
    nock.restore();
  });

  it('Test mock fetching chain data', () => {
    const chainInfo = client.getChainInfo('stargaze');
    expect(chainInfo.chainName).toEqual('stargaze');
  });

  it('Test mock fetching asset list', () => {
    const chainInfo = client.getChainInfo('stargaze');
    expect(chainInfo.nativeAssetList.assets.length).toEqual(1);
  });
});
