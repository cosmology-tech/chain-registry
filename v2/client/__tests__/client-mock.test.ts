import { ChainRegistryClient } from '../src/registry';

describe('Test client', () => {
  let client: ChainRegistryClient;
  
  beforeAll(async () => {
    client = new ChainRegistryClient({
      chainNames: ['stargaze']
    });
    await client.fetchUrls();
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
