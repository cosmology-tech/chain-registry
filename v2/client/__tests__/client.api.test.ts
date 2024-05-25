import { assetLists as _assetLists, chains } from '@chain-registry/v2';

import {
  ChainRegistryChainUtil,
  ChainRegistryChainUtilOptions,
  ChainRegistryClient,
  ChainRegistryClientOptions
} from '../src';

describe('tests for asset-list-util', () => {
  const assetLists = _assetLists.filter(
    ({ chainName }) => chainName === 'osmosis'
  );
  const chainInfos = chains.filter(
    ({ chainName }) => chainName === 'osmosis'
  );

  const regOptions: ChainRegistryClientOptions = {
    chainNames: ['osmosis'],
    chains: chainInfos,
    assetLists
  };

  const regClient = new ChainRegistryClient(regOptions);
  const chainInfo = regClient.getChainInfo('osmosis');
  const options: ChainRegistryChainUtilOptions = {
    chainInfo,
    chainName: 'osmosis'
  };
  const client = new ChainRegistryChainUtil(options);

  it('getAssetByDenom', () => {
    const asset = client.getAssetByDenom('uosmo');
    expect(asset?.base).toEqual('uosmo');
  });

  it('getAssetBySymbol', () => {
    const asset = client.getAssetBySymbol('ION');
    expect(asset?.base).toEqual('uion');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = client.getDenomByCoinGeckoId('osmosis');
    expect(denom1).toEqual('uosmo');
    const denom2 = client.getDenomByCoinGeckoId('ion');
    expect(denom2).toEqual('uion');
  });

  it('getSymbolByDenom', () => {
    const denom1 = client.getSymbolByDenom('uosmo');
    expect(denom1).toEqual('OSMO');
    const denom2 = client.getSymbolByDenom('uion');
    expect(denom2).toEqual('ION');
  });

  it('getDenomBySymbol', () => {
    const denom1 = client.getDenomBySymbol('OSMO');
    expect(denom1).toEqual('uosmo');
    const denom2 = client.getDenomBySymbol('ION');
    expect(denom2).toEqual('uion');
  });

  it('getExponentByDenom', () => {
    const exponent = client.getExponentByDenom('uosmo');
    expect(exponent).toEqual(6);
  });

  it('getExponentBySymbol', () => {
    const exponent = client.getExponentBySymbol('ION');
    expect(exponent).toEqual(6);
  });

  it('getCoinGeckoIdByDenom', () => {
    const id = client.getCoinGeckoIdByDenom('uosmo');
    expect(id).toEqual('osmosis');
  });

  it('getAssetLogoByDenom', () => {
    const logo = client.getAssetLogoByDenom('uosmo');
    expect(logo).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    );
  });

  it('getAssetNameByDenom', () => {
    const name = client.getAssetNameByDenom('uion');
    expect(name).toEqual('Ion DAO');
  });

  it('getChainNameByDenom', () => {
    const name = client.getChainNameByDenom(
      'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA'
    );
    expect(name).toEqual('jackal');
  });

  it('mapCoinGeckoPricesToDenoms', () => {
    const prices = {
      osmosis: { usd: 0.0001 },
      ion: { usd: 0.0002 }
    };
    const priceMap = client.mapCoinGeckoPricesToDenoms(prices);
    expect(priceMap).toEqual({
      uosmo: 0.0001,
      uion: 0.0002
    });
  });

  it('convertBaseUnitToDollarValue', () => {
    const value = client.convertBaseUnitToDollarValue({ uosmo: 1 }, 'OSMO', 5);
    expect(value).toEqual('0.000005');
  });

  it('convertDollarValueToBaseUnit', () => {
    const value = client.convertDollarValueToBaseUnit(
      { uosmo: 1 },
      'OSMO',
      0.00001
    );
    expect(value).toEqual('10');
  });

  it('convertBaseUnitToDisplayUnit', () => {
    const value = client.convertBaseUnitToDisplayUnit('OSMO', 99);
    expect(value).toEqual('0.000099');
  });

  it('convertDisplayUnitToBaseUnit', () => {
    const value = client.convertDisplayUnitToBaseUnit('OSMO', 0.000099);
    expect(value).toEqual('99');
  });
});
