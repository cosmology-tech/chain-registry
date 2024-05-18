import AjvDraft07, { ValidateFunction as ValidateFunctionDraft07 } from 'ajv';
import Ajv2019, { ValidateFunction as ValidateFunction2019 } from 'ajv/dist/2019';
import Ajv2020, { ValidateFunction as ValidateFunction2020 } from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import chalk from 'chalk';
import { JSONSchema } from 'schema-typescript';

import { DataMapping, JSONSchemaContent, Registry } from './registry';

export interface SchemaValidatorOptions {
    draft?: '2019-09' | '2020-12' | 'draft-07'
    useStrict?: boolean;
    allErrors?: boolean;
    useDefaults?: boolean;
}

export class SchemaValidator {
    private ajv: Ajv2020 | Ajv2019;
    private registry: Registry;
    private options: SchemaValidatorOptions;

    constructor(registry: Registry, options?: SchemaValidatorOptions) {
        const { useStrict = false, allErrors = true, useDefaults = true, draft = '2019-09' } = options ?? {};

        this.options = {
            useDefaults,
            useStrict,
            draft,
            allErrors
        };

        switch (draft) {
            case 'draft-07':
                this.ajv = new AjvDraft07({
                    strict: useStrict,
                    allErrors,
                    useDefaults
                });
                break;
            case '2019-09':
                this.ajv = new Ajv2019({
                    strict: useStrict,
                    allErrors,
                    useDefaults
                });
                break;
            case '2020-12':
                this.ajv = new Ajv2020({
                    strict: useStrict,
                    allErrors,
                    useDefaults
                });
                break;
            default:
                throw new Error('JSONSchema draft not yet supported.')

        }


        this.registry = registry;
        addFormats(this.ajv);
    }

    public validateAllData(verbose: boolean = false) {
        // Compile and validate each schema, then validate corresponding data
        this.registry.forEachSchemas(([title, schema]) => {
            try {
                
                switch (this.options.draft) {
                    case 'draft-07':
                        schema.content.$schema = 'http://json-schema.org/draft-07/schema';
                        break;
                    case '2019-09':
                        schema.content.$schema = 'https://json-schema.org/draft/2019-09/schema';
                        break;
                    case '2020-12':
                        schema.content.$schema = 'https://json-schema.org/draft/2020-12/schema';
                        break;
                    default:
                        break;
                }
                
                const validate: any = this.ajv.compile(schema.content);

                const dataMap = this.registry.dataMappings[title as keyof DataMapping];

                if (!dataMap) {
                    console.error(chalk.yellow(`⚠️  No data found for schema titled ${chalk.bold(title)}`));
                    return;
                }

                dataMap.forEach(data => {
                    this.validateJsonSchema(data, title, validate, verbose);
                });
            } catch (e) {
                console.error(chalk.red(`❌ Strict Validation errors for schema ${chalk.bold(title)} in file ${chalk.magenta(schema.path)}:`));
                throw e;
            }
        });
    }

    private validateJsonSchema(
        data: JSONSchemaContent<JSONSchema>,
        title: string,
        validate: ValidateFunction2019<unknown> | ValidateFunction2020<unknown> | ValidateFunctionDraft07<unknown>,
        verbose: boolean
    ) {
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
