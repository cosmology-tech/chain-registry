import assets from '../../../__fixtures__/assets.json';
import {
  convertBaseUnitToDisplayUnit,
  convertBaseUnitToDollarValue,
  convertDisplayUnitToBaseUnit,
  convertDollarValueToBaseUnit,
  mapCoinGeckoPricesToDenoms,
  roundDown
} from '../src/calc';

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
    expect(value).toEqual('200753226');
  });

  it('convertBaseUnitToDisplayUnit', () => {
    const value = convertBaseUnitToDisplayUnit(osmosisAssets, 'OSMO', 329823);
    expect(value).toEqual('0.329823');
    expect(() =>
      convertBaseUnitToDisplayUnit(osmosisAssets, 'ATOM', 100)
    ).toThrow();
  });

  it('convertDisplayUnitToBaseUnit', () => {
    const value = convertDisplayUnitToBaseUnit(
      osmosisAssets,
      'OSMO',
      0.00009944
    );
    expect(value).toEqual('99');
  });
});
