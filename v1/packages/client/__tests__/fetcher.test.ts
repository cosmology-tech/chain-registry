import {
  ChainRegistryFetcher,
  ChainRegistryFetcherOptions
} from '../src/fetcher';

const timeout = 30000; // miliseconds

describe('Test fetcher', () => {
  let fetcher: ChainRegistryFetcher;
  beforeAll((done) => {
    const options: ChainRegistryFetcherOptions = {
      urls: [
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original/osmosis/chain.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original/osmosis/assetlist.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original/juno/assetlist.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original/secretnetwork/assetlist.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original/_IBC/juno-osmosis.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/original/_IBC/osmosis-secretnetwork.json'
      ]
    };

    fetcher = new ChainRegistryFetcher(options);
    fetcher.fetchUrls().then(() => done());
  }, timeout);

  it(
    'Test chain registry',
    (done) => {
      expect(fetcher.chains.length).toBe(1);
      expect(fetcher.assetLists.length).toBe(3);
      done();
    },
    timeout
  );

  it(
    'Test chain info',
    (done) => {
      const chainInfo = fetcher.getChainInfo('osmosis');
      const generated = fetcher.getGeneratedAssetLists('osmosis');
      expect(chainInfo.assetLists).toEqual(generated);

      const osmosis = fetcher.getChain('osmosis');
      expect(chainInfo.chain).toEqual(osmosis);

      const osmosisAssets = fetcher.getChainAssetList('osmosis');
      expect(chainInfo.nativeAssetList).toEqual(osmosisAssets);

      done();
    },
    timeout
  );
});
