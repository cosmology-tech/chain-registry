import { CLI } from 'inquirerer';

import { commands } from '../src/commands/info';
import { setupTests, TestEnvironment } from '../test-utils';

const beforeEachSetup = setupTests();
const registryDir = '../../repos/fixtures/registries/original';

describe('Inquirerer', () => {
  let environment: TestEnvironment;

  beforeEach(() => {
    environment = beforeEachSetup();
  });

  it('prompts user and correctly processes delayed input', async () => {
    const { options, writeResults, transformResults } = environment;


    const app = new CLI(commands, options, {
      _: ['chain'],
      registryDir,
      chain: 'osmosis'
    });

    const result = await app.run();

    expect(result).toMatchSnapshot();
    expect(writeResults).toMatchSnapshot();
    expect(transformResults).toMatchSnapshot();
  });
});
