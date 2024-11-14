
import { getDenomsByCoinGeckoId } from '../src/assets';
import {
  convertBaseUnitToDisplayUnit,
  convertBaseUnitToDisplayUnitByDenom,
  convertBaseUnitToDollarValue,
  convertBaseUnitToDollarValueByDenom,
  convertDisplayUnitToBaseUnit,
  convertDollarValueToBaseUnit,
  mapCoinGeckoPricesToDenoms,
  roundDown
} from '../src/calc';
import { assets } from '../test-utils';

const osmosisAssets = assets.filter(
  ({ chain_name }) => chain_name === 'osmosis'
);

const coinGeckoPrices = {
  osmosis: {
    usd: 0.498124
  },
  ion: {
    usd: 0.321456
  }
};

describe('tests for calc utils', () => {
  it('roundDown', () => {
    const re1 = roundDown(1.12);
    expect(re1).toEqual('1');
    const re2 = roundDown(1.67);
    expect(re2).toEqual('1');
  });

  it('mapCoinGeckoPricesToDenoms', () => {
    const priceMap = mapCoinGeckoPricesToDenoms(osmosisAssets, coinGeckoPrices);
    expect(priceMap.uosmo).toEqual(0.498124);
    expect(priceMap.uion).toEqual(0.321456);
  });

  it('convertBaseUnitToDollarValue', () => {
    const priceMap = mapCoinGeckoPricesToDenoms(osmosisAssets, coinGeckoPrices);
    const value = convertBaseUnitToDollarValue(
      osmosisAssets,
      priceMap,
      'OSMO',
      5000000
    );
    expect(value).toEqual('2.49062');
  });

  it('convertDollarValueToBaseUnit', () => {
    const priceMap = mapCoinGeckoPricesToDenoms(osmosisAssets, coinGeckoPrices);
    const value = convertDollarValueToBaseUnit(
      osmosisAssets,
      priceMap,
      'OSMO',
      100
    );
    expect(value).toEqual('200753226.10434349679999');
  });

  it('convertBaseUnitToDisplayUnit', () => {
    const value = convertBaseUnitToDisplayUnit(osmosisAssets, 'OSMO', 329823);
    expect(value).toEqual('0.329823');
    expect(() =>
      convertBaseUnitToDisplayUnit(osmosisAssets, 'AATOM', 100)
    ).toThrow();
  });

  it('convertDisplayUnitToBaseUnit', () => {
    const value = convertDisplayUnitToBaseUnit(
      osmosisAssets,
      'OSMO',
      0.00009944
    );
    expect(value).toEqual('99.44');
  });

  it('getDenomsByCoinGeckoId', () => {
    const denoms = getDenomsByCoinGeckoId(osmosisAssets, 'osmosis');
    expect(denoms).toMatchObject(['uosmo']);
  });


  it('convertBaseUnitToDisplayUnitByDenom', () => {
    const value = convertBaseUnitToDisplayUnitByDenom(osmosisAssets, 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA', 1000, 'osmosis');
    expect(value).toBe('0.001');
  });

  it('convertBaseUnitToDollarValueByDenom' ,()=>{
    const priceMap = mapCoinGeckoPricesToDenoms(osmosisAssets, coinGeckoPrices);
    const dollar1 = convertBaseUnitToDollarValueByDenom(osmosisAssets, priceMap, 'uosmo', 1000000, 'osmosis');
    expect(dollar1).toBe('0.498124');
    const dollarNoPrice = convertBaseUnitToDollarValueByDenom(osmosisAssets, priceMap, 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA', 1000000, 'osmosis');
    expect(dollarNoPrice).toBe('0');
  });


});
