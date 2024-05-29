import { AssetList } from '@chain-registry/interfaces';
import { writeFileSync } from 'fs';
import { mkdirpSync as mkdirp } from 'mkdirp';
import { dirname, join } from 'path';
import { JSONStringifyOptions } from 'strfy-js';
import { jsStringify } from 'strfy-js';

import { JSONSchemaContent, Registry } from './registry';

export interface TSBuilderOptions {
  assetList: JSONStringifyOptions;
  chain: JSONStringifyOptions;
  ibcData: JSONStringifyOptions;
}

export class TSBuilder {
  options: TSBuilderOptions;
  private registry: Registry;

  constructor(registry: Registry, options?: TSBuilderOptions) {
    this.registry = registry;
    this.options = options;
  }

  build(outDir: string) {
    this.registry.dataMappings.AssetList.forEach((info: JSONSchemaContent<AssetList>) => {
      //
      console.log(info);
      const newPath = info.path.replace(this.registry.basePath, '');
      console.log({newPath});
      let str = jsStringify(info.content, {
        camelCase: true,
        space: 2
      });
      str = `
const info: AssetList = ${str}
      `;
      const file = join(outDir, newPath).replace(/\.json$/, '.ts');
      const dir = dirname(file);
      mkdirp(dir);
      writeFileSync(file, str);
    });
  }

}
