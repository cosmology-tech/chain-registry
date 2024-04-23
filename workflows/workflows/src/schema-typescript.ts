import * as fs from 'fs';
import { basename, dirname, join } from 'path';
import { generateTypeScript, JSONSchema, SchemaTSOptions } from 'schema-typescript';

import { FilePathInfo } from './fixtures';

// Default titles for certain schemas
// TODO create issue in cosmos/chain-registry
const DEFAULT_TITLES: { [filename: string]: string } = {
  'ibc_data.schema.json': 'IBCData',
  'chain.schema.json': 'Chain',
  'assetlist.schema.json': 'AssetList',
  'versions.schema.json': 'Versions',
  'memo_keys.schema.json': 'MemoKeys',
};


// Define an interface for the constructor options
export interface SchemaTypeGeneratorOptions {
  outputDir: string;
  schemaTSOptions: Partial<SchemaTSOptions>;
  schemas: FilePathInfo[];
  supportedSchemas?: string[];
}

export class SchemaTypeGenerator {
  private outputDir: string;
  private schemas: FilePathInfo[];
  private schemaTSOptions: Partial<SchemaTSOptions>
  private supportedSchemas: Set<string>;

  constructor(options: SchemaTypeGeneratorOptions) {
    this.outputDir = options.outputDir;
    this.schemas = options.schemas;
    this.supportedSchemas = new Set(options.supportedSchemas || []);
  }

  private updateSchemaTitle(schema: JSONSchema, schemaFile: string): void {
    const filename = basename(schemaFile);
    if (DEFAULT_TITLES[filename]) {
      schema.title = DEFAULT_TITLES[filename];
    }
  }

  private isSchemaSupported(filePath: string): boolean {
    if (this.supportedSchemas.size === 0) return true; // If no filter is provided, process all files
    const filename = basename(filePath);
    return this.supportedSchemas.has(filename);
  }

  public generateTypes(): void {
    this.schemas.forEach(fileInfo => {
      const schemaFile = fileInfo.origpath;
      if (this.isSchemaSupported(schemaFile)) {
        try {
          const schema: JSONSchema = this.readJsonFile(schemaFile);
          this.updateSchemaTitle(schema, schemaFile);
          const result = this.generateTypeScript(schema);
          const filename = this.getOutputFilename(schemaFile);
          this.ensureDirExists(filename);
          this.writeFile(filename, result);
        } catch (e) {
          console.log({ schemaFile })
        }
      }
    });
  }

  private readJsonFile(filePath: string): JSONSchema {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  private generateTypeScript(schema: JSONSchema): string {
    return generateTypeScript(schema, this.schemaTSOptions);
  }

  private getOutputFilename(schemaFile: string): string {
    const filename = basename(schemaFile);
    return join(this.outputDir, filename.replace(/.json$/, '.ts'));
  }

  private ensureDirExists(filePath: string): void {    
    this.mkdirpSync(dirname(filePath));
  }

  private mkdirpSync(p: string): void {
    if (!fs.existsSync(p)) {
      this.mkdirpSync(dirname(p));
      fs.mkdirSync(p);
    }
  }


  private writeFile(filePath: string, content: string): void {
    fs.writeFileSync(filePath, content);
  }
}
