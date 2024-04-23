import { AssetList, Chain, IBCData, MemoKeys, Versions } from '@chain-registry/interfaces';
import { readFileSync } from 'fs';
import { sync as glob } from 'glob';
import { basename, join } from 'path';
import { JSONSchema } from "schema-typescript";

const SCHEMATA_MAPPING: Record<string, string> = {
  AssetList: 'assetLists',
  Chain: 'chains',
  IBCData: 'ibcData',
  MemoKeys: 'memoKeys',
  Versions: 'versions'
};

const SCHEMA_WHITELIST = [
  'assetlist.schema.json',
  'chain.schema.json',
  'ibc_data.schema.json',
  'memo_keys.schema.json',
  'versions.schema.json'
];

interface JSONSchemaContent {
  $schemaFile: string;
  path: string;
  content: JSONSchema;
}

interface DataMapping {
  [key: string]: any[];
}

export class RegistryFixture {
  private definitions: JSONSchemaContent[];
  private basePath: string;
  private schemaMappings: { [title: string]: JSONSchema } = {};
  private dataMappings: DataMapping = {};

  constructor(basePath: string) {
    this.basePath = basePath;
    this.initializeData();
  }

  private getCamelCase(schema: JSONSchema): string {
    return SCHEMATA_MAPPING[schema.title];
  }

  private isJsonSchema(schema: JSONSchema): boolean {
    const $schema = schema.$schema;
    if (!$schema) return false;
    return true;
  }

  private startsWithUrl(schema: JSONSchema): boolean {
    return (/^http/.test(schema.$schema))
  }

  private isSchema(schema: JSONSchema): boolean {
    if (!this.isJsonSchema(schema)) return false;
    if (!this.startsWithUrl(schema)) return false;
    const url = new URL(schema.$schema);
    const def = url.pathname;
    if (def.match(/\/draft-0[47]\/schema$/)) {
      return true;
    }
    return false;
  }

  private getSchemaFrom$Schema(data: JSONSchemaContent): JSONSchema {
    const schema = this.definitions.find(defn => {
      const pred = basename(defn.path) === data.$schemaFile;
      return pred;
    });
    if (!schema) {
      console.warn('missing schema definition: ' + data.$schemaFile);
    }
    return schema.content;
  }

  private isData(schema: JSONSchema): boolean {
    if (!this.isJsonSchema(schema)) return false;
    if (this.startsWithUrl(schema)) return false;
    if (SCHEMA_WHITELIST.includes(basename(schema.$schema))) return true;
    return false;
  }

  private loadData(schema: JSONSchemaContent): void {
    if (this.isData(schema.content)) {
      const defn = this.getSchemaFrom$Schema(schema);
      this.dataMappings[this.getCamelCase(defn)].push(schema.content);
    }
  }

  private initStoreForSchema(schema: JSONSchema) {
    // if it exists return
    if (schema.title in this.schemaMappings) return;

    // initialize
    const camel = this.getCamelCase(schema);
    this.schemaMappings[schema.title] = schema;
    this.dataMappings[camel] = [];
  }

  private initializeData(): void {

    let types: any = {};

    // parse every JSON file
    this.definitions = glob(`${this.basePath}/**/*.json`)
      .map(path => {
        const content = JSON.parse(readFileSync(path, 'utf-8'));
        if (!this.isJsonSchema(content)) return;
        types[basename(content.$schema)] = true;
        return {
          $schemaFile: basename(content.$schema),
          path,
          content
        };
      }).filter(Boolean)

    // filter out schemas (e.g. draft-04/schema )
    const schemas = this.definitions.filter(schema => this.isSchema(schema.content)).filter(Boolean);

    // validate
    schemas.forEach(schema => {
      if (!(schema.content.title in SCHEMATA_MAPPING)) throw new Error('MISSING SCHEMA: ' + schema.content.title)
    });

    // create schemaMappings and data
    schemas.forEach(schema => {
      this.initStoreForSchema(schema.content);
    });

    // load data
    this.definitions
      .filter(d => SCHEMA_WHITELIST.includes(d.$schemaFile))
      .forEach(schema => {
        this.loadData(schema)
      })
  }

  public get chains(): Chain[] {
    return this.dataMappings.chains || [];
  }

  public get assetLists(): AssetList[] {
    return this.dataMappings.assetLists || [];
  }

  public get ibcData(): IBCData[] {
    return this.dataMappings.ibcData || [];
  }

  public get memoKeys(): MemoKeys[] {
    return this.dataMappings.memoKeys || [];
  }

  public get versions(): Versions[] {
    return this.dataMappings.versions || [];
  }

  public get count() {
    return {
      chains: this.chains.length,
      assetLists: this.assetLists.length,
      ibcData: this.ibcData.length,
      memoKeys: this.memoKeys.length,
      versions: this.versions.length,
    }
  }
}