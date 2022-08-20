export interface IBCInfo {
    $schema?: string;
    'chain-1': {
        'chain-name': string;
        'client-id': string;
        'connection-id': string;
    };
    'chain-2': {
        'chain-name': string;
        'client-id': string;
        'connection-id': string;
    };
    channels: {
        'chain-1': {
            'channel-id': string;
            'port-id': string;
        };
        'chain-2': {
            'channel-id': string;
            'port-id': string;
        };
        ordering: string;
        version: string;
        tags: object;
    }[];
}
