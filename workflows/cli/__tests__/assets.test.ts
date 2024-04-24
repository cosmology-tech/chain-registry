import { CLI } from 'inquirerer';

import { commands } from '../src/commands/info';
import { setupTests, TestEnvironment } from '../test-utils';

const beforeEachSetup = setupTests();
const registryDir = '../../packages/chain-registry/chain-registry';

describe('Inquirerer', () => {
  let environment: TestEnvironment;

  beforeEach(() => {
    environment = beforeEachSetup();
  });

  it('prompts user and correctly processes delayed input', async () => {
    const { options, writeResults, transformResults } = environment;

    // enqueueInputResponse({ type: 'read', value: registryDir });
    // enqueueInputResponse({ type: 'read', value: 'osmosis' });
    // enqueueInputResponse({ type: 'key', value: KEY_SEQUENCES.ENTER });
    // enqueueInputResponse({ type: 'read', value: 'agoric' });
    // enqueueInputResponse({ type: 'key', value: KEY_SEQUENCES.ENTER });

    const app = new CLI(commands, options, {
      _: ['asset-list'],
      registryDir,
      chain: 'osmosis',
      asset: 'uion'
    });

    const result = await app.run();

    expect(result).toMatchSnapshot();
    expect(writeResults).toMatchSnapshot();
    expect(transformResults).toMatchSnapshot();
  });
});
