import { assets } from 'chain-registry';

import {
  convertBaseUnitsToDisplayUnits,
  convertBaseUnitsToDollarValue,
  convertCoinGeckoPricesToDenomPriceMap,
  convertDollarValueToDenomUnits,
  getAssetByDenom,
  getChainDenomBySymbol,
  getDenomByCoinGeckoId,
  getExponentByDenom,
  getSymbolByChainDenom,
  noDecimals
} from '../src';

describe('tests for asset-list-util', () => {
  let testAssets = [];

  beforeAll(() => {
    testAssets = assets.find((it) => it.chain_name === 'osmosis')?.assets || [];
  });

  it('get osmosis asset by denom', () => {
    const asset = getAssetByDenom(testAssets, 'uosmo');
    expect(asset.name).toEqual('Osmosis');
  });

  it('get osmosis denom by geckoId', () => {
    const denom = getDenomByCoinGeckoId(testAssets, 'osmosis');
    expect(denom).toEqual('uosmo');
  });

  it('get osmosis symbol by denom', () => {
    const token = getSymbolByChainDenom(testAssets, 'uosmo');
    expect(token).toEqual('OSMO');
  });

  it('get osmosis denom by symbol', () => {
    const denom = getChainDenomBySymbol(testAssets, 'OSMO');
    expect(denom).toEqual('uosmo');
  });

  it('get osmosis exponent by denom', () => {
    const exponent = getExponentByDenom(testAssets, 'uosmo');
    expect(exponent).toEqual(6);
  });

  it('convert osmosis gecko price to denom price map', () => {
    const priceMap = convertCoinGeckoPricesToDenomPriceMap(testAssets, {
      osmosis: {
        usd: 0.498124
      }
    });
    expect(priceMap.uosmo).toEqual(0.498124);
  });

  it('convert number no decimals', () => {
    const re1 = noDecimals(1.12);
    expect(re1).toEqual('1');
    const re2 = noDecimals(1.67);
    expect(re2).toEqual('1');
  });

  it('convert osmosis base units to dollar value', () => {
    const re = convertBaseUnitsToDollarValue(
      testAssets,
      { uosmo: 1 },
      'OSMO',
      5
    );
    expect(re).toEqual('0.000005');
  });

  it('convert doller value to osmosis denom units', () => {
    const re = convertDollarValueToDenomUnits(
      testAssets,
      { uosmo: 1 },
      'OSMO',
      0.00001
    );
    expect(re).toEqual('10');
  });

  it('convert osmosis base units to display units', () => {
    const re = convertBaseUnitsToDisplayUnits(testAssets, 'OSMO', 99);
    expect(re).toEqual('0.000099');
  });
});
