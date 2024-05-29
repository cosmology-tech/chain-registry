import { join } from 'path';

import { TSBuilder, TSBuilderOptions } from '../src';
import { fixtureOutputDir, getRegistry } from '../test-utils';

const outputDir = join(fixtureOutputDir, 'ts-builder');
const registry = getRegistry();

const options: TSBuilderOptions = {
  assetList: {
    camelCase: true,
    space: 2,
  },
  chain: {
    camelCase: true,
    space: 2,
  },
  ibcData: {
    camelCase: true,
    space: 2
  }
};

it('TSBuilder', () => {
  const builder = new TSBuilder(registry, options);
  builder.build(outputDir);
});