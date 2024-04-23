import Ajv, { ValidateFunction } from 'ajv/dist/2019';
import addFormats from 'ajv-formats';

import { DataMapping, RegistryFixture } from './registry';

export class SchemaValidator {
    private ajv: Ajv;
    private registry: RegistryFixture;

    constructor(registry: RegistryFixture) {
        this.ajv = new Ajv({
            strict: false,
            allErrors: true,
            useDefaults: true
        });
        this.registry = registry;
        addFormats(this.ajv);
        this.loadSchemasAndValidate();
    }

    private loadSchemasAndValidate() {
        // Compile and validate each schema using AJV
        Object.entries(this.registry.schemaMappings).forEach(([title, schema]) => {
            schema.$schema = 'https://json-schema.org/draft/2019-09/schema';
            if (!title) {
                console.log(title);
                return;
            }
            const dataMap = this.registry.dataMappings[title as keyof DataMapping];
            if (!dataMap) {
                console.error(`No data found for schema titled ${title}`);
                return;
            }
            const validate: ValidateFunction<unknown> = this.ajv.compile(schema);
            dataMap.forEach(data => {
                try {
                    if (!validate(data.content)) {
                        console.error(`Validation errors for ${data.path} ${title}:`, validate.errors);
                        throw new Error(`Data validation failed for ${title}`);
                    }
                } catch (e) {
                    console.log(data);
                    throw e;
                }
            });
        });
    }

    public validateData(): void {
        // Compile and validate each schema, then validate corresponding data
        Object.entries(this.registry.schemaMappings).forEach(([title, schema]) => {
            const validate: ValidateFunction<unknown> = this.ajv.compile(schema);
            const dataMap = this.registry.dataMappings[title as keyof DataMapping];
            if (!dataMap) {
                console.error(`No data found for schema titled ${title}`);
                return;
            }
            dataMap.forEach(data => {
                if (!validate(data.content)) {
                    console.error(`Validation errors for ${data.content} ${title}:`, validate.errors);
                    throw new Error(`Data validation failed for ${title}`);
                }
            });

        });
    }

}
