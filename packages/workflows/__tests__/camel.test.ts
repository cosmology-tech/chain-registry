import { fs } from 'file-ts';
import * as nativeFs from 'fs';

import { schemas } from '../src';
import { SchemaTypeGenerator } from '../src';
import { globSync, mkdirpSync } from '../test-utils';

it('types', () => {
  const generator = new SchemaTypeGenerator({
    outputDir: './schemas',
    // @ts-ignore
    readFs: nativeFs,
    // @ts-ignore
    writeFs: {
        ...fs,
        mkdirpSync
    },
    supportedSchemas: [
        'chain.schema.json',
        'assetlist.schema.json',
        // 'ibc_data.schema.json'
    ],
    schemas,
    schemaTSOptions: {
        strictTypeSafety: true,
        useCamelCase: true,
        useSingleQuotes: true
    }
  });
  generator.generateTypes();

  const tsFiles = globSync('./schemas', '*.ts');
  expect(tsFiles).toMatchSnapshot();

  tsFiles.forEach(file=>{
    const content = fs.readFileSync(file, 'utf-8');
    expect(content).toMatchSnapshot();
  });
  
});