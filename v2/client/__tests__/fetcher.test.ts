import {
  ChainRegistryFetcher,
  ChainRegistryFetcherOptions
} from '../src/fetcher';

describe('Test fetcher', () => {
  let fetcher: ChainRegistryFetcher;
  beforeAll(async () => {
    const options: ChainRegistryFetcherOptions = {
      urls: [
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/osmosis/chain.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/osmosis/assetlist.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/juno/assetlist.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/secretnetwork/assetlist.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/_IBC/juno-osmosis.json',
        'https://raw.githubusercontent.com/chain-registry/chain-registry/main/registries/minimal/_IBC/osmosis-secretnetwork.json'
      ]
    };

    fetcher = new ChainRegistryFetcher(options);
    await fetcher.fetchUrls();
  });

  it('Test chain registry',() => {
    expect(fetcher.chains.length).toBe(1);
    expect(fetcher.assetLists.length).toBe(3);
  });

  it('Test chain info',() => {
    const chainInfo = fetcher.getChainInfo('osmosis');
    const generated = fetcher.getGeneratedAssetLists('osmosis');
    // expect(chainInfo.assetLists).toEqual(generated);

    const osmosis = fetcher.getChain('osmosis');
    expect(chainInfo.chain).toEqual(osmosis);

    const osmosisAssets = fetcher.getChainAssetList('osmosis');
    expect(chainInfo.nativeAssetList).toEqual(osmosisAssets);
  });
});
