import { Chain } from '@chain-registry/types';

export const getGasPriceStep = (chain: Chain) => {
  return {
    low: chain.fees?.fee_tokens?.[0]?.low_gas_price ?? 0.01,
    average: chain.fees?.fee_tokens?.[0]?.average_gas_price ?? 0.025,
    high: chain.fees?.fee_tokens?.[0]?.high_gas_price ?? 0.04
  };
};
