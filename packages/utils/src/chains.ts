import { Chain } from '@chain-registry/types';
import { customFind } from './assets';

export interface GasPriceRanges {
  low: number;
  average: number;
  high: number;
}

export const getGasPriceRangesFromChain = (chain: Chain): GasPriceRanges => {
  const feeToken = chain.fees?.fee_tokens?.[0];
  return {
    low: feeToken?.low_gas_price ?? 0.01,
    average: feeToken?.average_gas_price ?? 0.025,
    high: feeToken?.high_gas_price ?? 0.04
  };
};

export const getChainByChainName = (
  chains: Chain[],
  chainName: string
): Chain | undefined => {
  return customFind(chains, (chain) => chain.chain_name === chainName);
};

export const getChainByChainId = (
  chains: Chain[],
  chainId: string
): Chain | undefined => {
  return customFind(chains, (chain) => chain.chain_id === chainId);
};

export const getChainNameByChainId = (
  chains: Chain[],
  chainId: string
): string | undefined => {
  return getChainByChainId(chains, chainId)?.chain_name;
};

export const getChainIdByChainName = (
  chains: Chain[],
  chainName: string
): string | undefined => {
  return getChainByChainName(chains, chainName)?.chain_id;
};

export const getChainGasPriceRanges = (
  chains: Chain[],
  chainName: string
): GasPriceRanges | undefined => {
  const chain = getChainByChainName(chains, chainName);
  return chain ? getGasPriceRangesFromChain(chain) : undefined;
};

export const getChainPrettyName = (
  chains: Chain[],
  chainName: string
): string | undefined => {
  return getChainByChainName(chains, chainName)?.pretty_name;
};

export const getChainBech32Prefix = (
  chains: Chain[],
  chainName: string
): string | undefined => {
  return getChainByChainName(chains, chainName)?.bech32_prefix;
};
