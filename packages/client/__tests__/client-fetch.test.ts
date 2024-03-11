import { ChainRegistryClient } from '../src';

const timeout = 5000;
const urls = [
  'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/chain.json',
  'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/assetlist.json',
  'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/assetlist.json',
  'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/assetlist.json',
  'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/juno-osmosis.json',
  'https://raw.githubusercontent.com/cosmos/chain-registry/master/_IBC/osmosis-secretnetwork.json'
];

describe('Test client fetch', () => {
  let client: ChainRegistryClient;

  beforeAll((done) => {
    client = new ChainRegistryClient();
    client.fetch({ urls }).then(() => done());
  }, timeout);

  it(
    'Test chain registry',
    () => {
      expect(client.chains.length).toBe(1);
      expect(client.assetLists.length).toBe(3);
      expect(client.ibcInfo.length).toBe(2);
    },
    timeout
  );

  it(
    'Test chain info',
    () => {
      const chainData = client.getChainFullData('osmosis');
      const ibcAssetList = client.getChainIbcAssetList('osmosis');
      expect(chainData.ibcAssetList).toEqual(ibcAssetList);

      const osmosis = client.getChain('osmosis');
      expect(chainData.chain).toEqual(osmosis);

      const osmosisAssets = client.getChainAssetList('osmosis');
      expect(chainData.assetList).toEqual(osmosisAssets);
    },
    timeout
  );
});
