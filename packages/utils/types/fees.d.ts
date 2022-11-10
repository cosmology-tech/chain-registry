import { Chain } from '@chain-registry/types';
export declare const getGasPriceStep: (chain: Chain) => {
    low: number;
    average: number;
    high: number;
};
