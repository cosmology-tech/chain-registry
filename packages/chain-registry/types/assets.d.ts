declare const _exports: {
    [n: number]: {
        $schema: string;
        chain_name: string;
        assets: ({
            description: string;
            denom_units: ({
                denom: string;
                exponent: number;
            } | {
                denom: string;
                exponent: number;
                aliases: string[];
            })[];
            base: string;
            name: string;
            display: string;
            symbol: string;
            logo_URIs: {
                svg: string;
                png: string;
            };
            coingecko_id: string;
        })
    }
};
export = _exports;
