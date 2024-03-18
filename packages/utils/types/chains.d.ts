import { Chain } from '@chain-registry/types';
export declare const getGasPriceRangesFromChain: (chain: Chain) => {
    low: number;
    average: number;
    high: number;
};
export declare const getChainByChainName: (chains: Chain[], chainName: string) => Chain | undefined;
export declare const getChainByChainId: (chains: Chain[], chainId: string) => Chain | undefined;
export declare const getChainNameByChainId: (chains: Chain[], chainId: string) => string | undefined;
export declare const getChainIdByChainName: (chains: Chain[], chainName: string) => string | undefined;
export declare const getChainGasPriceRanges: (chains: Chain[], chainName: string) => {
    low: number;
    average: number;
    high: number;
} | undefined;
export declare const getChainPrettyName: (chains: Chain[], chainName: string) => string | undefined;
export declare const getChainBech32Prefix: (chains: Chain[], chainName: string) => string | undefined;
