import { Chain } from '@chain-registry/v2-types';

import { customFind } from './utils';

export interface GasPriceRanges {
  low: number;
  average: number;
  high: number;
}

export const getGasPriceRangesFromChain = (chain: Chain): GasPriceRanges => {
  const feeToken = chain.fees?.feeTokens?.[0];
  return {
    low: feeToken?.lowGasPrice ?? 0.01,
    average: feeToken?.averageGasPrice ?? 0.025,
    high: feeToken?.highGasPrice ?? 0.04
  };
};

export const getChainByChainName = (
  chains: Chain[],
  chainName: string
): Chain | undefined => {
  return customFind(chains, (chain) => chain.chainName === chainName, `chainName:${chainName}`);
};

export const getChainByChainId = (
  chains: Chain[],
  chainId: string
): Chain | undefined => {
  return customFind(chains, (chain) => chain.chainId === chainId, `chainId:${chainId}`);
};

export const getChainNameByChainId = (
  chains: Chain[],
  chainId: string
): string | undefined => {
  return getChainByChainId(chains, chainId)?.chainName;
};

export const getChainIdByChainName = (
  chains: Chain[],
  chainName: string
): string | undefined => {
  return getChainByChainName(chains, chainName)?.chainId;
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
  return getChainByChainName(chains, chainName)?.prettyName;
};

export const getChainBech32Prefix = (
  chains: Chain[],
  chainName: string
): string | undefined => {
  return getChainByChainName(chains, chainName)?.bech32Prefix;
};
