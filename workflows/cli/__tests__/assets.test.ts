import { CLI } from 'inquirerer';

import { commands } from '../src/commands';
import { KEY_SEQUENCES, setupTests, TestEnvironment } from '../test-utils';

const beforeEachSetup = setupTests();

describe('Inquirerer', () => {
  let environment: TestEnvironment;

  beforeEach(() => {
    environment = beforeEachSetup();
  });

  it('prompts user and correctly processes delayed input', async () => {
    const { options, writeResults, transformResults, enqueueInputResponse } = environment;

    enqueueInputResponse({ type: 'read', value: 'osmosis' });
    enqueueInputResponse({ type: 'key', value: KEY_SEQUENCES.ENTER });
    enqueueInputResponse({ type: 'read', value: 'agoric' });
    enqueueInputResponse({ type: 'key', value: KEY_SEQUENCES.ENTER });


    const app = new CLI(commands, options, {
      _: ['asset-lists']
    });

    const result = await app.run();

    expect(result).toMatchSnapshot();
    expect(writeResults).toMatchSnapshot();
    expect(transformResults).toMatchSnapshot();
  });
});
