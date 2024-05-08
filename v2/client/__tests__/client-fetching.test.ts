import {
  ChainRegistryClient,
  ChainRegistryClientOptions
} from '../src/registry';

describe('Test client', () => {
  let client: ChainRegistryClient;
  beforeAll(() => {
    const options: ChainRegistryClientOptions = {
      chainNames: ['osmosis']
    };

    client = new ChainRegistryClient(options);
    return client.fetchUrls();
  });

  it(
    'Test fetching chain Info',
    () => {
      const chainInfo = client.getChainInfo('osmosis');
      expect(chainInfo.chainName).toEqual('osmosis');
    }
  );

  it(
    'Test chain util',
    () => {
      const chainUtil = client.getChainUtil('osmosis');
      const asset = chainUtil.getAssetByDenom('uosmo')!;
      expect(asset.name).toEqual('Osmosis');
    }
  );

  it(
    'Test fetching asset list',
    () => {
      const chainInfo = client.getChainInfo('osmosis');
      const generated = client.getGeneratedAssetLists('osmosis');
      expect(chainInfo.assetLists).toEqual(generated);
    }
  );
});
