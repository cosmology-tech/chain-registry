import {
  ChainRegistryFetcher,
  ChainRegistryFetcherOptions
} from '../src/registry';

it('ChainRegistry', async () => {
  const options: ChainRegistryFetcherOptions = {
    urls: [
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json'
    ]
  };
  const registry = new ChainRegistryFetcher(options);
  await registry.fetchUrls();
  expect(registry.chains.length).toBe(1);
  expect(registry.assetLists.length).toBe(1);
});

it('ChainInfo', async () => {
  const options: ChainRegistryFetcherOptions = {
    urls: [
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json',
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/assetlist.json',
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/assetlist.json',
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/juno-osmosis.json',
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json'
    ]
  };
  const registry = new ChainRegistryFetcher(options);
  await registry.fetchUrls();

  // get ChainInfo object
  const chainInfo = registry.getChainInfo('osmosis');
  const generated = registry.getGeneratedAssetLists('osmosis');
  const gen2 = chainInfo.assetLists;
  expect(gen2).toEqual(generated);
  const native = registry.getChainAssetList('osmosis');
  const numGenerated = generated[0].assets.length;
  const num = native.assets.length;
  expect(numGenerated > num).toBe(true);

  const osmosis = registry.getChain('osmosis');
  const osmosisAssets = registry.getChainAssetList('osmosis');
  //

  expect(chainInfo.chain).toEqual(osmosis);
  expect(chainInfo.nativeAssetLists).toEqual(osmosisAssets);
  // chainInfo.chain_name;
});
