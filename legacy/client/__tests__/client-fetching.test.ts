import {
  ChainRegistryClient,
  ChainRegistryClientOptions
} from '../src/registry';

const timeout = 30000; // miliseconds

describe('Test client', () => {
  let client: ChainRegistryClient;
  beforeAll((done) => {
    const options: ChainRegistryClientOptions = {
      chainNames: ['osmosis']
    };

    client = new ChainRegistryClient(options);
    client.fetchUrls().then(() => done());
  }, timeout);

  it(
    'Test fetching chain Info',
    () => {
      const chainInfo = client.getChainInfo('osmosis');
      expect(chainInfo.chainName).toEqual('osmosis');
    },
    timeout
  );

  it(
    'Test chain util',
    () => {
      const chainUtil = client.getChainUtil('osmosis');
      const asset = chainUtil.getAssetByDenom('uosmo')!;
      expect(asset.name).toEqual('Osmosis');
    },
    timeout
  );

  it(
    'Test fetching asset list',
    () => {
      const chainInfo = client.getChainInfo('osmosis');
      const generated = client.getGeneratedAssetLists('osmosis');
      expect(chainInfo.assetLists).toEqual(generated);
    },
    timeout
  );
});
