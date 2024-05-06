import {
  getChainBech32Prefix,
  getChainByChainId,
  getChainByChainName,
  getChainGasPriceRanges,
  getChainIdByChainName,
  getChainNameByChainId,
  getChainPrettyName
} from '../src/chains';
import { chains } from '@chain-registry/v2'

describe('tests for chains utils', () => {
  it('getChainByChainName', () => {
    const chain = getChainByChainName(chains, 'osmosis');
    expect(chain?.chainName).toEqual('osmosis');
    const chain2 = getChainByChainName(chains, 'cosmoshub');
    expect(chain2?.chainName).toEqual('cosmoshub');
    const chain3 = getChainByChainName(chains, 'testchain');
    expect(chain3).toBeUndefined();
    expect(() =>
      getChainByChainName([...chains, ...chains], 'osmosis')
    ).toThrow();
  });

  it('getChainByChainId', () => {
    const chain = getChainByChainId(chains, 'osmosis-1');
    expect(chain?.chainName).toEqual('osmosis');
    const chain2 = getChainByChainId(chains, 'cosmoshub-4');
    expect(chain2?.chainName).toEqual('cosmoshub');
  });

  it('getChainIdByChainName', () => {
    const chainId = getChainIdByChainName(chains, 'osmosis');
    expect(chainId).toEqual('osmosis-1');
    const chainId2 = getChainIdByChainName(chains, 'cosmoshub');
    expect(chainId2).toEqual('cosmoshub-4');
  });

  it('getChainNameByChainId', () => {
    const chainName = getChainNameByChainId(chains, 'osmosis-1');
    expect(chainName).toEqual('osmosis');
    const chainName2 = getChainNameByChainId(chains, 'cosmoshub-4');
    expect(chainName2).toEqual('cosmoshub');
  });

  it('getChainGasPriceRanges', () => {
    const gasPriceRanges = getChainGasPriceRanges(chains, 'osmosis');
    expect(gasPriceRanges?.average).toEqual(0.025);
    const gasPriceRanges2 = getChainGasPriceRanges(chains, 'tgrade');
    expect(gasPriceRanges2?.high).toEqual(0.1);
    const gasPriceRanges3 = getChainGasPriceRanges(chains, 'juno');
    expect(gasPriceRanges3?.low).toEqual(0.075);
  });

  it('getChainPrettyName', () => {
    const prettyName = getChainPrettyName(chains, 'osmosis');
    expect(prettyName).toEqual('Osmosis');
    const prettyName2 = getChainPrettyName(chains, 'cosmoshub');
    expect(prettyName2).toEqual('Cosmos Hub');
    const prettyName3 = getChainPrettyName(chains, 'testchain');
    expect(prettyName3).toBeUndefined();
  });

  it('getChainBech32Prefix', () => {
    const bech32Prefix = getChainBech32Prefix(chains, 'osmosis');
    expect(bech32Prefix).toEqual('osmo');
    const bech32Prefix2 = getChainBech32Prefix(chains, 'cosmoshub');
    expect(bech32Prefix2).toEqual('cosmos');
    const bech32Prefix3 = getChainBech32Prefix(chains, 'injective');
    expect(bech32Prefix3).toEqual('inj');
  });
});
