import Ajv, { ValidateFunction } from 'ajv/dist/2019';
import addFormats from 'ajv-formats';
import chalk from 'chalk';
import { JSONSchema } from 'schema-typescript';

import { DataMapping, JSONSchemaContent, Registry } from './registry';

export interface SchemaValidatorOptions {
    useStrict?: boolean;
    allErrors?: boolean;
    useDefaults?: boolean;
}

export class SchemaValidator {
    private ajv: Ajv;
    private registry: Registry;

    constructor(registry: Registry, options?: SchemaValidatorOptions) {
        const { useStrict = false, allErrors = true, useDefaults = true } = options ?? {};

        this.ajv = new Ajv({
            strict: useStrict,
            allErrors,
            useDefaults
        });

        this.registry = registry;
        addFormats(this.ajv);
    }

    public validateAllData(verbose: boolean = false) {
        // Compile and validate each schema, then validate corresponding data
        this.registry.forEachSchemas(([title, schema]) => {
            schema.content.$schema = 'https://json-schema.org/draft/2019-09/schema';
            const validate: ValidateFunction<unknown> = this.ajv.compile(schema.content);
            const dataMap = this.registry.dataMappings[title as keyof DataMapping];

            if (!dataMap) {
                console.error(chalk.yellow(`⚠️  No data found for schema titled ${chalk.bold(title)}`));
                return;
            }

            dataMap.forEach(data => {
                this.validateJsonSchema(data, title, validate, verbose);
            });
        });
    }

    private validateJsonSchema(data: JSONSchemaContent<JSONSchema>, title: string, validate: ValidateFunction<unknown>, verbose: boolean) {
        if (!validate(data.content)) {
            console.error(chalk.red(`❌ Validation errors for ${chalk.bold(title)} in file ${chalk.magenta(data.path)}:`));
            validate.errors?.forEach(error => {
                console.error(chalk.red(`  ➡️ ${error.instancePath} ${error.message}`));
            });
        } else if (verbose) {
            console.log(chalk.green(`✅ Validation passed for ${chalk.bold(title)} in file ${chalk.magenta(data.path)}`));
        }
    }
}
