import { assets, chains } from 'chain-registry';

import {
  ChainRegistryChainUtil,
  ChainRegistryChainUtilOptions,
  ChainRegistryClient,
  ChainRegistryClientOptions
} from '../src';

describe('tests for asset-list-util', () => {
  const assetLists = assets.filter(
    ({ chain_name }) => chain_name === 'osmosis'
  );
  const chainInfos = chains.filter(
    ({ chain_name }) => chain_name === 'osmosis'
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
    expect(asset.base).toEqual('uosmo');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = client.getDenomByCoinGeckoId('osmosis');
    expect(denom1).toEqual('uosmo');
    const denom2 = client.getDenomByCoinGeckoId('ion');
    expect(denom2).toEqual('uion');
  });

  it('getSymbolByChainDenom', () => {
    const denom1 = client.getSymbolByChainDenom('uosmo');
    expect(denom1).toEqual('OSMO');
    const denom2 = client.getSymbolByChainDenom('uion');
    expect(denom2).toEqual('ION');
  });

  it('getChainDenomBySymbol', () => {
    const denom1 = client.getChainDenomBySymbol('OSMO');
    expect(denom1).toEqual('uosmo');
    const denom2 = client.getChainDenomBySymbol('ION');
    expect(denom2).toEqual('uion');
  });

  it('getExponentByDenom', () => {
    const exponent = client.getExponentByDenom('uosmo');
    expect(exponent).toEqual(6);
  });

  it('convertBaseUnitsToDollarValue', () => {
    const value = client.convertBaseUnitsToDollarValue({ uosmo: 1 }, 'OSMO', 5);
    expect(value).toEqual('0.000005');
  });

  it('convertDollarValueToDenomUnits', () => {
    const value = client.convertDollarValueToDenomUnits(
      { uosmo: 1 },
      'OSMO',
      0.00001
    );
    expect(value).toEqual('10');
  });

  it('convertBaseUnitsToDisplayUnits', () => {
    const value = client.convertBaseUnitsToDisplayUnits('OSMO', 99);
    expect(value).toEqual('0.000099');
  });

  it('uosmo coingecko id', () => {
    const id = client.getCoinGeckoIdByDenom('uosmo');
    expect(id).toEqual('osmosis');
  });
});
