import { basename, dirname, join } from 'path';
import { generateTypeScript, JSONSchema, SchemaTSOptions } from 'schema-typescript';

// Define an interface for the filesystem operations
export interface FileSystem {
  readFileSync(path: string, encoding: string): string;
  writeFileSync(path: string, data: string): void;
  mkdirpSync(path: string): void;
}

// Define an interface for the constructor options
export interface SchemaTypeGeneratorOptions {
  outputDir: string;
  schemaTSOptions: Partial<SchemaTSOptions>;
  readFs: FileSystem;
  writeFs: FileSystem;
  schemas: string[];
  supportedSchemas?: string[];
}

// Default titles for certain schemas
// TODO create issue in cosmos/chain-registry
const DEFAULT_TITLES: { [filename: string]: string } = {
  'ibc_data.schema.json': 'IBCData',
  'chain.schema.json': 'Chain',
  'assetlist.schema.json': 'AssetList'
};
export class SchemaTypeGenerator {
  private outputDir: string;
  private writeFs: FileSystem;
  private readFs: FileSystem;
  private schemas: string[];
  private schemaTSOptions: Partial<SchemaTSOptions>
  private supportedSchemas: Set<string>;

  constructor(options: SchemaTypeGeneratorOptions) {
    this.outputDir = options.outputDir;
    this.writeFs = options.writeFs;
    this.readFs = options.readFs;
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
    this.schemas.forEach(schemaFile => {
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
    return JSON.parse(this.readFs.readFileSync(filePath, 'utf-8'));
  }

  private generateTypeScript(schema: JSONSchema): string {
    return generateTypeScript(schema, this.schemaTSOptions);
  }

  private getOutputFilename(schemaFile: string): string {
    const filename = basename(schemaFile);
    return join(this.outputDir, filename.replace(/.json$/, '.ts'));
  }

  private ensureDirExists(filePath: string): void {
    this.writeFs.mkdirpSync(dirname(filePath));
  }

  private writeFile(filePath: string, content: string): void {
    this.writeFs.writeFileSync(filePath, content);
  }
}
