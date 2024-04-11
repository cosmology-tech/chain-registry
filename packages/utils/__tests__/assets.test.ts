import {
  getAssetByDenom,
  getAssetBySymbol,
  getChainLogo,
  getChainNameByDenom,
  getChainNameByStakingDenom,
  getCoinGeckoIdByDenom,
  getDenomByCoinGeckoId,
  getDenomBySymbol,
  getExponentByDenom,
  getExponentBySymbol,
  getNativeTokenByChainName,
  getSymbolByDenom,
  getTokenLogoByDenom,
  getTokenNameByDenom
} from '../src/assets';
import { assets, chains } from '../test-utils';

describe('tests for assets utils', () => {
  it('getAssetByDenom', () => {
    expect(() => getAssetByDenom(assets, 'uosmo')).toThrow();
    const asset = getAssetByDenom(assets, 'uosmo', 'osmosis');
    expect(asset?.base).toEqual('uosmo');
  });

  it('getAssetBySymbol', () => {
    expect(getAssetBySymbol([], 'ATOM')).toBeUndefined();
    const asset1 = getAssetBySymbol(assets, 'DVPN');
    expect(asset1?.base).toEqual('udvpn');
    const asset2 = getAssetBySymbol(assets, 'SOMM');
    expect(asset2?.base).toEqual('usomm');
  });

  it('getChainLogo', () => {
    const logo1 = getChainLogo(assets, 'comdex');
    expect(logo1).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
    );
    const logo2 = getChainLogo(assets, 'cosmoshub');
    expect(logo2).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png'
    );
  });

  it('getChainNameByDenom', () => {
    const chain1 = getChainNameByDenom(assets, 'ucmdx');
    expect(chain1).toEqual('comdex');
    expect(() => getChainNameByDenom(assets, 'uatom')).toThrow();
  });

  it.only('getChainNameByStakingDenom', () => {
    const chain1 = getChainNameByStakingDenom(chains, 'ucmdx');
    expect(chain1).toEqual('comdex');
    const chain2 = getChainNameByStakingDenom(chains, 'uatom');
    expect(chain2).toEqual('cosmoshub');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = getDenomByCoinGeckoId(assets, 'jackal');
    expect(denom1).toEqual('ujkl');
    const denom2 = getDenomByCoinGeckoId(assets, 'stargaze', 'stargaze');
    expect(denom2).toEqual('ustars');
  });

  it('getSymbolByDenom', () => {
    const denom1 = getSymbolByDenom(assets, 'swth');
    expect(denom1).toEqual('SWTH');
    const denom2 = getSymbolByDenom(assets, 'uusdc', 'axelar');
    expect(denom2).toEqual('USDC');
  });

  it('getDenomBySymbol', () => {
    const denom1 = getDenomBySymbol(assets, 'OCTA');
    expect(denom1).toEqual('uocta');
    const denom2 = getDenomBySymbol(assets, 'NOM', 'nomic');
    expect(denom2).toEqual('unom');
  });

  it('getExponentByDenom', () => {
    const exponent = getExponentByDenom(assets, 'uosmo', 'osmosis');
    expect(exponent).toEqual(6);
  });

  it('getExponentBySymbol', () => {
    const exponent = getExponentBySymbol(assets, 'OCTA');
    expect(exponent).toEqual(6);
    expect(() => getExponentBySymbol(assets, 'ATOM')).toThrow();
    const exponent2 = getExponentBySymbol(assets, 'ATOM', 'cosmoshub');
    expect(exponent2).toEqual(6);
  });

  it('getNativeTokenByChainName', () => {
    const nativeToken = getNativeTokenByChainName(assets, 'osmosis');
    expect(nativeToken.base).toEqual('uosmo');
    const nativeToken2 = getNativeTokenByChainName(assets, 'juno');
    expect(nativeToken2.base).toEqual('ujuno');
  });

  it('getTokenLogoByDenom', () => {
    const logo = getTokenLogoByDenom(assets, 'uosmo', 'osmosis');
    expect(logo).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    );
    expect(() => getTokenLogoByDenom(assets, 'uatom')).toThrow();
    const logo2 = getTokenLogoByDenom(assets, 'uatom', 'cosmoshub');
    expect(logo2).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png'
    );
    const logo3 = getTokenLogoByDenom(assets, 'ubcre');
    expect(logo3).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png'
    );
  });

  it('getTokenNameByDenom', () => {
    expect(() => getTokenNameByDenom(assets, 'uatom')).toThrow();
    const name = getTokenNameByDenom(assets, 'uatom', 'cosmoshub');
    expect(name).toEqual('Cosmos');
    const name2 = getTokenNameByDenom(assets, 'ubcre');
    expect(name2).toEqual('Bonded Crescent');
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
    expect(id).toBeUndefined();
  });
});
