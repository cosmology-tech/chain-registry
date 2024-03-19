import { ChainRegistryClient, ChainRegistryUtils } from '../src';

const timeout = 30000;

describe('tests for chain registry utils', () => {
  let utils: ChainRegistryUtils;

  beforeAll(async () => {
    const client = new ChainRegistryClient({ chainNames: ['osmosis'] });
    await client.fetch();

    const { assetList, ibcAssetList } = client.getChainFullData('osmosis');

    utils = new ChainRegistryUtils({
      chainName: 'osmosis',
      assetList,
      ibcAssetList
    });
  }, timeout);

  it('getAssetByDenom', () => {
    const asset = utils.getAssetByDenom('uosmo');
    expect(asset?.base).toEqual('uosmo');
  });

  it('getAssetBySymbol', () => {
    const asset = utils.getAssetBySymbol('ION');
    expect(asset?.base).toEqual('uion');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = utils.getDenomByCoinGeckoId('osmosis');
    expect(denom1).toEqual('uosmo');
    const denom2 = utils.getDenomByCoinGeckoId('ion');
    expect(denom2).toEqual('uion');
  });

  it('getSymbolByDenom', () => {
    const denom1 = utils.getSymbolByDenom('uosmo');
    expect(denom1).toEqual('OSMO');
    const denom2 = utils.getSymbolByDenom('uion');
    expect(denom2).toEqual('ION');
  });

  it('getDenomBySymbol', () => {
    const denom1 = utils.getDenomBySymbol('OSMO');
    expect(denom1).toEqual('uosmo');
    const denom2 = utils.getDenomBySymbol('ION');
    expect(denom2).toEqual('uion');
  });

  it('getExponentByDenom', () => {
    const exponent = utils.getExponentByDenom('uosmo');
    expect(exponent).toEqual(6);
  });

  it('getExponentBySymbol', () => {
    const exponent = utils.getExponentBySymbol('ION');
    expect(exponent).toEqual(6);
  });

  it('getCoinGeckoIdByDenom', () => {
    const id = utils.getCoinGeckoIdByDenom('uosmo');
    expect(id).toEqual('osmosis');
  });

  it('getTokenLogoByDenom', () => {
    const logo = utils.getTokenLogoByDenom('uosmo');
    expect(logo).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    );
  });

  it('getTokenNameByDenom', () => {
    const name = utils.getTokenNameByDenom('uosmo');
    expect(name).toEqual('Osmosis');
  });

  it('getChainNameByDenom', () => {
    const name = utils.getChainNameByDenom(
      'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA'
    );
    expect(name).toEqual('jackal');
  });

  it('mapCoinGeckoPricesToDenoms', () => {
    const prices = {
      osmosis: { usd: 0.0001 },
      ion: { usd: 0.0002 }
    };
    const priceMap = utils.mapCoinGeckoPricesToDenoms(prices);
    expect(priceMap).toEqual({
      uosmo: 0.0001,
      uion: 0.0002
    });
  });

  it('convertBaseUnitToDollarValue', () => {
    const value = utils.convertBaseUnitToDollarValue({ uosmo: 1 }, 'OSMO', 5);
    expect(value).toEqual('0.000005');
  });

  it('convertDollarValueToBaseUnit', () => {
    const value = utils.convertDollarValueToBaseUnit(
      { uosmo: 1 },
      'OSMO',
      0.00001
    );
    expect(value).toEqual('10');
  });

  it('convertBaseUnitToDisplayUnit', () => {
    const value = utils.convertBaseUnitToDisplayUnit('OSMO', 99);
    expect(value).toEqual('0.000099');
  });

  it('convertDisplayUnitToBaseUnit', () => {
    const value = utils.convertDisplayUnitToBaseUnit('OSMO', 0.000099);
    expect(value).toEqual('99');
  });
});
