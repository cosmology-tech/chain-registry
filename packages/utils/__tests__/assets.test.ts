
import {
  getAssetByDenom,
  getAssetBySymbol,
  getAssetLogoByDenom,
  getAssetNameByDenom,
  getChainLogo,
  getChainNameByDenom,
  getChainNameByStakingDenom,
  getCoinGeckoIdByDenom,
  getDenomByCoinGeckoId,
  getDenomBySymbol,
  getExponentByDenom,
  getExponentBySymbol,
  getNativeAssetByChainName,
  getSymbolByDenom
} from '../src/assets';
import { assetLists } from '@chain-registry/v2'
import { chains as mainNetChains } from '@chain-registry/v2/mainnet'

describe('tests for assets utils', () => {
  it('getAssetByDenom', () => {
    expect(() => getAssetByDenom(assetLists, 'uosmo')).toThrow();
    const asset = getAssetByDenom(assetLists, 'uosmo', 'osmosis');
    expect(asset?.base).toEqual('uosmo');
  });

  it('getAssetBySymbol', () => {
    expect(getAssetBySymbol([], 'ATOM')).toBeUndefined();
    const asset1 = getAssetBySymbol(assetLists, 'DVPN', 'sentinel');
    expect(asset1?.base).toEqual('udvpn');
    const asset2 = getAssetBySymbol(assetLists, 'SOMM', 'sommelier');
    expect(asset2?.base).toEqual('usomm');
  });

  it('getChainLogo', () => {
    const logo1 = getChainLogo(assetLists, 'comdex');
    expect(logo1).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png'
    );
    const logo2 = getChainLogo(assetLists, 'cosmoshub');
    expect(logo2).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png'
    );
  });

  it('getChainNameByDenom', () => {
    const chain1 = getChainNameByDenom(assetLists, 'ucmdx');
    expect(chain1).toEqual('comdex');
    expect(() => getChainNameByDenom(assetLists, 'uatom')).toThrow();
  });

  it('getChainNameByStakingDenom', () => {
    const chain1 = getChainNameByStakingDenom(mainNetChains, 'ucmdx');
    expect(chain1).toEqual('comdex');
    const chain2 = getChainNameByStakingDenom(mainNetChains, 'uatom');
    expect(chain2).toEqual('cosmoshub');
  });

  it('getDenomByCoinGeckoId', () => {
    const denom1 = getDenomByCoinGeckoId(assetLists, 'jackal');
    expect(denom1).toEqual('ujkl');
    const denom2 = getDenomByCoinGeckoId(assetLists, 'stargaze', 'stargaze');
    expect(denom2).toEqual('ustars');
  });

  it('getSymbolByDenom', () => {
    const denom1 = getSymbolByDenom(assetLists, 'swth');
    expect(denom1).toEqual('SWTH');
    const denom2 = getSymbolByDenom(assetLists, 'uusdc', 'axelar');
    expect(denom2).toEqual('USDC');
  });

  it('getDenomBySymbol', () => {
    const denom1 = getDenomBySymbol(assetLists, 'OCTA');
    expect(denom1).toEqual('uocta');
    const denom2 = getDenomBySymbol(assetLists, 'NOM', 'nomic');
    expect(denom2).toEqual('unom');
  });

  it('getExponentByDenom', () => {
    const exponent = getExponentByDenom(assetLists, 'uosmo', 'osmosis');
    expect(exponent).toEqual(6);
  });

  it('getExponentBySymbol', () => {
    const exponent = getExponentBySymbol(assetLists, 'OCTA');
    expect(exponent).toEqual(6);
    expect(() => getExponentBySymbol(assetLists, 'ATOM')).toThrow();
    const exponent2 = getExponentBySymbol(assetLists, 'ATOM', 'cosmoshub');
    expect(exponent2).toEqual(6);
  });

  it('getNativeAssetByChainName', () => {
    const nativeToken = getNativeAssetByChainName(assetLists, 'osmosis')
    expect(nativeToken.base).toEqual('uosmo');
    const nativeToken2 = getNativeAssetByChainName(assetLists, 'juno');
    expect(nativeToken2.base).toEqual('ujuno');
  });

  it('getAssetLogoByDenom', () => {
    const logo = getAssetLogoByDenom(assetLists, 'uosmo', 'osmosis');
    expect(logo).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
    );
    expect(() => getAssetLogoByDenom(assetLists, 'uatom')).toThrow();
    const logo2 = getAssetLogoByDenom(assetLists, 'uatom', 'cosmoshub');
    expect(logo2).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png'
    );
    const logo3 = getAssetLogoByDenom(assetLists, 'ubcre');
    expect(logo3).toEqual(
      'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png'
    );
  });

  it('getAssetNameByDenom', () => {
    expect(() => getAssetNameByDenom(assetLists, 'uatom')).toThrow();
    const name = getAssetNameByDenom(assetLists, 'uatom', 'cosmoshub');
    expect(name).toEqual('Cosmos');
    const name2 = getAssetNameByDenom(assetLists, 'ubcre');
    expect(name2).toEqual('Bonded Crescent');
  });
});

describe('getCoinGeckoIdByDenom', () => {
  it('uosmo coingecko id', () => {
    const id = getCoinGeckoIdByDenom(assetLists, 'uosmo');
    expect(id).toEqual('osmosis');
  });

  it('ujkl coingecko id on testnet', () => {
    const id = getCoinGeckoIdByDenom(assetLists, 'ujkl', {
      allowTestnet: true,
      excludedChainNames: ['jackal']
    });
    expect(id).toEqual('jackal');
  });

  it('uluna coingecko id on terra2', () => {
    const id = getCoinGeckoIdByDenom(assetLists, 'uluna', {
      excludedChainNames: ['terra']
    });
    expect(id).toEqual('terra-luna-2');
  });

  it('uusdc coingecko id without traces', () => {
    const id = getCoinGeckoIdByDenom(assetLists, 'uusdcc', {
      customAssetFilter(asset) {
        return !asset.traces;
      }
    });
    expect(id).toBeUndefined();
  });
});
