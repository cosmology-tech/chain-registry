import request from 'supertest';

import { ChainRegistryClient } from '../src/registry';

const timeout = 30000; // miliseconds

describe('Test client', () => {
  it(
    'test urls generated by client',
    async () => {
      const client = new ChainRegistryClient({
        chainNames: ['osmosis', 'juno']
      });
      expect(client.urls.length).toEqual(5);

      const host = 'https://raw.githubusercontent.com';
      const responses = await Promise.all(
        client.urls.map((url) =>
          request(host)
            .get(url.substring(host.length))
            .timeout(timeout)
            .expect(200)
        )
      );

      responses?.forEach((res) => {
        expect(JSON.parse(res?.text).$schema).toBeDefined();
      });
    },
    timeout
  );
});
