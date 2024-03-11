import { ChainRegistryClient, ChainUtils } from '../src';

describe('tests for asset-list-util', () => {
  let utils: ChainUtils;

  beforeAll(async () => {
    const client = new ChainRegistryClient({ chainNames: ['osmosis'] });
    await client.fetch();

    const { assetList, ibcAssetList } = client.getChainFullData('osmosis');

    utils = new ChainUtils({
      chainName: 'osmosis',
      assetList,
      ibcAssetList
    });
  });

  it('getAssetByDenom', () => {
    const asset = utils.getAssetByDenom('uosmo');
    expect(asset.base).toEqual('uosmo');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = utils.getDenomByCoinGeckoId('osmosis');
    expect(denom1).toEqual('uosmo');
    const denom2 = utils.getDenomByCoinGeckoId('ion');
    expect(denom2).toEqual('uion');
  });

  it('getSymbolByChainDenom', () => {
    const denom1 = utils.getSymbolByChainDenom('uosmo');
    expect(denom1).toEqual('OSMO');
    const denom2 = utils.getSymbolByChainDenom('uion');
    expect(denom2).toEqual('ION');
  });

  it('getChainDenomBySymbol', () => {
    const denom1 = utils.getChainDenomBySymbol('OSMO');
    expect(denom1).toEqual('uosmo');
    const denom2 = utils.getChainDenomBySymbol('ION');
    expect(denom2).toEqual('uion');
  });

  it('getExponentByDenom', () => {
    const exponent = utils.getExponentByDenom('uosmo');
    expect(exponent).toEqual(6);
  });

  it('convertBaseUnitsToDollarValue', () => {
    const value = utils.convertBaseUnitsToDollarValue({ uosmo: 1 }, 'OSMO', 5);
    expect(value).toEqual('0.000005');
  });

  it('convertDollarValueToDenomUnits', () => {
    const value = utils.convertDollarValueToDenomUnits(
      { uosmo: 1 },
      'OSMO',
      0.00001
    );
    expect(value).toEqual('10');
  });

  it('convertBaseUnitsToDisplayUnits', () => {
    const value = utils.convertBaseUnitsToDisplayUnits('OSMO', 99);
    expect(value).toEqual('0.000099');
  });

  it('uosmo coingecko id', () => {
    const id = utils.getCoinGeckoIdByDenom('uosmo');
    expect(id).toEqual('osmosis');
  });
});
