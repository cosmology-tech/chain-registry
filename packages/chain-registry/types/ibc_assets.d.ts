declare const _exports: {
    [n: number]: {
        chain: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        counterparty: {
            "chain-name": string;
            "client-id": string;
            "connection-id": string;
            "channel-id": string;
            "port-id": string;
        };
        assets: ({
            description: string;
            denom_units: {
                denom: string;
                exponent: number;
                aliases: string[];
            }[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                png: string;
                svg: string;
            };
            coingecko_id: string;
        })
    }
};
export = _exports;
