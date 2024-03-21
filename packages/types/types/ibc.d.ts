export interface IBCInfo {
    $schema?: string;
    chain_1: {
        chain_name: string;
        client_id: string;
        connection_id: string;
    };
    chain_2: {
        chain_name: string;
        client_id: string;
        connection_id: string;
    };
    channels: {
        chain_1: {
            channel_id: string;
            client_id?: string;
            connection_id?: string;
            port_id: string;
        };
        chain_2: {
            channel_id: string;
            client_id?: string;
            connection_id?: string;
            port_id: string;
        };
        ordering: string;
        version: string;
        fee_version?: string;
        tags?: object;
    }[];
    /**
     * ibc connection operator information.
     */
    operators?: {
        chain_1: ChainOperatorInfo;
        chain_2: ChainOperatorInfo;
        memo: string;
        /**
         * Operator display name
         */
        name: string;
        discord_handle?: string;
        [k: string]: unknown;
    }[];
}

/**
 * Operator information on a specific chain.
 */
export interface ChainOperatorInfo {
    address?: string;
    [k: string]: unknown;
  }