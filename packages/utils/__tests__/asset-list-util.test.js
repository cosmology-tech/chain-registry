import assets from '../../../__fixtures__/assets.json';
import {
  convertBaseUnitsToDisplayUnits,
  convertBaseUnitsToDollarValue,
  convertCoinGeckoPricesToDenomPriceMap,
  convertDollarValueToDenomUnits,
  getAssetByDenom,
  getChainDenomBySymbol,
  getCoinGeckoIdByDenom,
  getDenomByCoinGeckoId,
  getExponentByDenom,
  getSymbolByChainDenom,
  noDecimals
} from '../src';

describe('tests for asset-list-util', () => {
  const osmosisAssetList = assets.filter(
    ({ chain_name }) => chain_name === 'osmosis'
  );

  it('getAssetByDenom', () => {
    console.log('uosmo');
    expect(() => getAssetByDenom(assets, 'uosmo')).toThrow();
    console.log('uosmo', 'osmosis');
    const asset = getAssetByDenom(assets, 'uosmo', 'osmosis');
    expect(asset.base).toEqual('uosmo');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = getDenomByCoinGeckoId(assets, 'jackal');
    expect(denom1).toEqual('ujkl');
    const denom2 = getDenomByCoinGeckoId(assets, 'stargaze', 'stargaze');
    expect(denom2).toEqual('ustars');
  });

  it('getSymbolByChainDenom', () => {
    const denom1 = getSymbolByChainDenom(assets, 'swth');
    expect(denom1).toEqual('SWTH');
    const denom2 = getSymbolByChainDenom(assets, 'uusdc', 'axelar');
    expect(denom2).toEqual('USDC');
  });

  it('getChainDenomBySymbol', () => {
    const denom1 = getChainDenomBySymbol(assets, 'OCTA');
    expect(denom1).toEqual('uocta');
    const denom2 = getChainDenomBySymbol(assets, 'NOM', 'nomic');
    expect(denom2).toEqual('unom');
  });

  it('getExponentByDenom', () => {
    const exponent = getExponentByDenom(assets, 'uosmo', 'osmosis');
    expect(exponent).toEqual(6);
  });

  it('convertCoinGeckoPricesToDenomPriceMap', () => {
    const priceMap = convertCoinGeckoPricesToDenomPriceMap(osmosisAssetList, {
      osmosis: {
        usd: 0.498124
      }
    });
    expect(priceMap.uosmo).toEqual(0.498124);
  });

  it('noDecimals', () => {
    const re1 = noDecimals(1.12);
    expect(re1).toEqual('1');
    const re2 = noDecimals(1.67);
    expect(re2).toEqual('1');
  });

  it('convertBaseUnitsToDollarValue', () => {
    const value = convertBaseUnitsToDollarValue(
      osmosisAssetList,
      { uosmo: 1 },
      'OSMO',
      5
    );
    expect(value).toEqual('0.000005');
  });

  it('convertDollarValueToDenomUnits', () => {
    const value = convertDollarValueToDenomUnits(
      osmosisAssetList,
      { uosmo: 1 },
      'OSMO',
      0.00001
    );
    expect(value).toEqual('10');
  });

  it('convertBaseUnitsToDisplayUnits', () => {
    const value = convertBaseUnitsToDisplayUnits(osmosisAssetList, 'OSMO', 99);
    expect(value).toEqual('0.000099');
  });
});

describe('getCoinGeckoIdByDenom', () => {
  it('uosmo coingecko id', () => {
    const id = getCoinGeckoIdByDenom(assets, 'uosmo');
    expect(id).toEqual('osmosis');
  });

  it('ujkl coingecko id on testnet', () => {
    const id = getCoinGeckoIdByDenom(assets, 'ujkl', {
      allowTestnet: true,
      excludedChainNames: ['jackal']
    });
    expect(id).toEqual('jackal');
  });

  it('uluna coingecko id on terra2', () => {
    const id = getCoinGeckoIdByDenom(assets, 'uluna', {
      excludedChainNames: ['terra']
    });
    expect(id).toEqual('terra-luna-2');
  });

  it('uusdc coingecko id without traces', () => {
    const id = getCoinGeckoIdByDenom(assets, 'uusdcc', {
      customAssetFilter(asset) {
        return !asset.traces;
      }
    });
    expect(id).toBeNull();
  });
});
