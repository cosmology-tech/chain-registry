import { AssetList, Chain, IBCData, MemoKeys, Versions } from '@chain-registry/interfaces';
import { readFileSync } from 'fs';
import { sync as glob } from 'glob';
import { basename } from 'path';
import { JSONSchema } from 'schema-typescript';

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

// export type SchemaMapper<T, V> = (value: V[], index: number, array: T[][]) => T;
export type SchemaMapper = ([title, schema]: [string, JSONSchemaContent<any>]) => any;

export interface JSONSchemaContent<T> {
  $schemaFile: string;
  path: string;
  content: T;  // Now generic, holds specific schema data type
}
export interface DataMapping {
  AssetList: JSONSchemaContent<AssetList>[]
  IBCData: JSONSchemaContent<IBCData>[]
  Chain: JSONSchemaContent<Chain>[]
  MemoKeys: JSONSchemaContent<MemoKeys>[]
  Versions: JSONSchemaContent<Versions>[]
}

const IGNORE_ROOT_DIRS = [
  `_template`,
  `.github`,
  `.git`,
  `node_modules`
];
export interface SchemaMapping {
  AssetList: JSONSchemaContent<JSONSchema>;
  IBCData: JSONSchemaContent<JSONSchema>;
  Chain: JSONSchemaContent<JSONSchema>;
  MemoKeys: JSONSchemaContent<JSONSchema>;
  Versions: JSONSchemaContent<JSONSchema>;
}

export class Registry {
  private definitions: JSONSchemaContent<JSONSchema>[];
  public basePath: string;
  public schemaMappings: SchemaMapping = {
    AssetList: null,
    IBCData: null,
    Chain: null,
    MemoKeys: null,
    Versions: null
  };
  public dataMappings: DataMapping = {
    AssetList: [],
    IBCData: [],
    Chain: [],
    MemoKeys: [],
    Versions: []
  };

  constructor(basePath: string) {
    this.basePath = basePath;
    this.initializeData();
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

  private getSchemaFrom$Schema(data: JSONSchemaContent<JSONSchema>): JSONSchema {
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

  private loadData(schema: JSONSchemaContent<JSONSchema>): void {
    if (this.isData(schema.content)) {
      const defn = this.getSchemaFrom$Schema(schema);
      this.dataMappings[defn.title as keyof DataMapping].push(schema as any);
    }
  }

  private initStoreForSchema(schema: JSONSchemaContent<JSONSchema>) {
    // if it exists return
    if (this.schemaMappings[schema.content.title as keyof SchemaMapping]) return;

    // initialize
    this.schemaMappings[schema.content.title as keyof SchemaMapping] = schema;
  }

  private initializeData(): void {
    let types: any = {};

    // parse every JSON file
    this.definitions = glob(`${this.basePath}/**/*.json`, {
      // ignore certain root directories
      ignore: IGNORE_ROOT_DIRS.map(dir => `${this.basePath}/${dir}/**/*`)
    })
      .map(path => {
        try {
          const content = JSON.parse(readFileSync(path, 'utf-8'));
          if (!this.isJsonSchema(content)) return;
          // https://stackoverflow.com/questions/69133771/ajv-no-schema-with-key-or-ref-https-json-schema-org-draft-07-schema
          content.$schema = content.$schema.replace(/https/, 'http');
          types[basename(content.$schema)] = true;
          return {
            $schemaFile: basename(content.$schema),
            path,
            content
          };
        } catch (error) {
          // Throw a custom error with a clear message including the file path
          throw new Error(`Failed to parse JSON. The file at "${path}" is not valid JSON.`);
        }
      }).filter(Boolean)

    // filter out schemas (e.g. draft-04/schema )
    const schemas = this.definitions.filter(schema => this.isSchema(schema.content)).filter(Boolean);

    // validate
    schemas.forEach(schema => {
      if (!(schema.content.title in SCHEMATA_MAPPING)) throw new Error('MISSING SCHEMA: ' + schema.content.title)
    });

    // create schemaMappings and data
    schemas.forEach(schema => {
      this.initStoreForSchema(schema);
    });

    // load data
    this.definitions
      .filter(d => SCHEMA_WHITELIST.includes(d.$schemaFile))
      .forEach(schema => {
        this.loadData(schema)
      })
  }

  public mapSchemas(mapper: SchemaMapper): any {
    return Object.entries(this.schemaMappings).map(([title, schema]) => {
      if (schema) return [title, schema];
    }).filter(Boolean)
      .map(mapper as any);
  }

  public forEachSchemas(mapper: SchemaMapper): any {
    return Object.entries(this.schemaMappings).map(([title, schema]) => {
      if (schema) return [title, schema];
    }).filter(Boolean)
      .forEach(mapper as any);
  }

  public get chains(): Chain[] {
    return this.dataMappings.Chain.map(c => c.content);
  }

  public get assetLists(): AssetList[] {
    return this.dataMappings.AssetList.map(c => c.content);
  }

  public get ibcData(): IBCData[] {
    return this.dataMappings.IBCData.map(c => c.content);
  }

  public get memoKeys(): MemoKeys[] {
    return this.dataMappings.MemoKeys.map(c => c.content);
  }

  public get versions(): Versions[] {
    return this.dataMappings.Versions.map(c => c.content);
  }

  public get schemas(): JSONSchemaContent<JSONSchema>[] {
    return this.mapSchemas(([_str, obj]) => {
      return obj as JSONSchemaContent<JSONSchema>;
    })
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