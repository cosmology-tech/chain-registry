import { ChainRegistryClient } from '../src/client';

const timeout = 5000;

describe('Test client', () => {
  let client: ChainRegistryClient;

  beforeAll((done) => {
    client = new ChainRegistryClient({ chainNames: ['osmosis'] });
    client.fetch().then(() => done());
  }, timeout);

  it('Test fetching chain', () => {
    const chain = client.getChain('osmosis');
    expect(chain?.chain_name).toEqual('osmosis');
  });

  it('Test fetching chain ibc info', async () => {
    expect(client.ibcInfo.length).toEqual(0);

    await client.fetch({ chainNames: ['juno'] });

    expect(client.urls.length).toEqual(5);
    expect(client.chains.length).toEqual(2);
    expect(client.ibcInfo.length).toEqual(1);
    expect(client.ibcInfo[0].chain_1.chain_name).toEqual('juno');
  });

  it('Test fetching asset list', () => {
    const chainData = client.getChainFullData('osmosis');
    const assetList = client.getChainAssetList('osmosis');
    expect(chainData.assetList).toEqual(assetList);
  });

  it('Test chain utils', () => {
    const chainUtils = client.getChainUtils('osmosis');
    const asset = chainUtils.getAssetByDenom('uosmo');
    expect(asset.name).toEqual('Osmosis');
  });
});
