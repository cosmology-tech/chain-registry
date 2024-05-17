import { writeFileSync } from 'fs';
import { sync as mkdirp } from 'mkdirp';
import { dirname, join } from 'path';
import { jsonStringify, JSONStringifyOptions } from 'strfy-js';

import { JSONSchemaContent, Registry } from './registry';

import { JSONSchemaPatch, JSONSchemaPatchOperation } from 'json-schema-patch';

export interface RegistryBuilderOptions {
  assetList: JSONStringifyOptions;
  chain: JSONStringifyOptions;
  ibcData: JSONStringifyOptions;
  
  ops: {
    assetList: JSONSchemaPatchOperation[];
    chain: JSONSchemaPatchOperation[];
    ibcData: JSONSchemaPatchOperation[];
  }
  
}

export class RegistryBuilder {
  options: RegistryBuilderOptions;
  private registry: Registry;

  constructor(registry: Registry, options?: RegistryBuilderOptions) {
    this.registry = registry;
    this.options = options;
  }

  writeFile(outDir: string, info: JSONSchemaContent<any>, options: JSONStringifyOptions) {
    const str = jsonStringify(info.content, options);
    const file = join(outDir, info.path.replace(this.registry.basePath, ''));
    mkdirp(dirname(file));
    writeFileSync(file, str);
  }

  writeSchema(outDir: string, info: JSONSchemaContent<any>, ops: JSONSchemaPatchOperation[]) {
    const patcher = new JSONSchemaPatch(info.content);
    ops.forEach(patcher.prepareOperation.bind(patcher));
    patcher.applyPatch();

    const file = join(outDir, info.path.replace(this.registry.basePath, ''));
    mkdirp(dirname(file));
    writeFileSync(file, JSON.stringify(patcher.schema, null, 2));
  }

  buildSchemas(outDir: string) {
    this.writeSchema(outDir, this.registry.schemaMappings.AssetList, this.options.ops.assetList);
    this.writeSchema(outDir, this.registry.schemaMappings.Chain, this.options.ops.chain);
    this.writeSchema(outDir, this.registry.schemaMappings.IBCData, this.options.ops.ibcData);
  }

  build(outDir: string) {
    this.registry.dataMappings.AssetList.forEach(info => {
      this.writeFile(outDir, info, this.options.assetList);
    });
    this.registry.dataMappings.Chain.forEach(info => {
      this.writeFile(outDir, info, this.options.chain);
    });
    this.registry.dataMappings.IBCData.forEach(info => {
      this.writeFile(outDir, info, this.options.ibcData);
    });
  }

}
