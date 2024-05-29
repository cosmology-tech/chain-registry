import * as t from '@babel/types';
import { isValidIdentifier } from 'schema-typescript';

// Define a type for JSON values
export type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
export interface JsonArray extends Array<JsonValue> { }
export interface JsonObject {
  [key: string]: JsonValue;
}

function jsonToAst(value: JsonValue): t.Expression {
  if (typeof value === 'number') {
    return t.numericLiteral(value);
  } else if (typeof value === 'string') {
    return t.stringLiteral(value);
  } else if (typeof value === 'boolean') {
    return t.booleanLiteral(value);
  } else if (value === null) {
    return t.nullLiteral();
  } else if (Array.isArray(value)) {
    return t.arrayExpression(value.map(item => jsonToAst(item)));
  } else if (typeof value === 'object') {
    // Object values assumed to be non-null due to prior checks
    const properties = Object.keys(value).map(key => {
      // Check if the key is a valid JavaScript identifier
      const keyNode = isValidIdentifier(key) ? t.identifier(key) : t.stringLiteral(key);
      return t.objectProperty(keyNode, jsonToAst(value[key] as JsonValue), false);
    });
    return t.objectExpression(properties);
  } else {
    throw new Error(`Unsupported type: ${typeof value}`);
  }
}

export function createVariableAssignment(
  varName: string,
  jsonObject: JsonObject
): t.ExpressionStatement {
  const identifier = t.identifier(varName);
  const assignmentExpression = t.assignmentExpression(
    '=',
    identifier,
    jsonToAst(jsonObject)
  );

  return t.expressionStatement(assignmentExpression);
}

export function createTypedVariableDeclaration(
  varName: string,
  varType: string,
  jsonObject: JsonObject,
  typed: boolean = true,
  exported: boolean = true
): t.VariableDeclaration | t.ExportNamedDeclaration {
  const identifier = t.identifier(varName);

  // Add type annotation to the identifier if typed is true
  if (typed) {
    identifier.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(varType)));
  }

  const variableDeclarator = t.variableDeclarator(
    identifier,
    jsonToAst(jsonObject)
  );

  const declaration = t.variableDeclaration('const', [variableDeclarator]);

  if (exported) {
    return t.exportNamedDeclaration(declaration, []);
  }
  return declaration;
}

export function createImportDeclaration(importedNames: string[], sourceModule: string): t.ImportDeclaration {
  // Create multiple import specifiers
  const importSpecifiers = importedNames.map(name =>
    t.importSpecifier(t.identifier(name), t.identifier(name))
  );

  // Create the import declaration using the specifiers array
  return t.importDeclaration(importSpecifiers, t.stringLiteral(sourceModule));
}

export function createAliasedImportDeclaration(importedName: string, localAlias: string, sourceModule: string): t.ImportDeclaration {
  // Create an import specifier with renaming (aliasing)
  const importSpecifier = t.importSpecifier(t.identifier(localAlias), t.identifier(importedName));

  // Create the import declaration using the specifier
  return t.importDeclaration([importSpecifier], t.stringLiteral(sourceModule));
}

// Function to create an AST for exporting an array of variables with type annotations
export function createExportedArrayDeclaration(
  varName: string, // e.g., 'assetLists'
  varType: string, // e.g., 'AssetList'
  variableNames: string[] // e.g., ['_bitcannadevnet2', '_celestiatestnet2', ...]
): t.ExportNamedDeclaration {
  // Create identifier for the variable
  const identifier = t.identifier(varName);

  // Add TypeScript type annotation to the variable, assuming an array of type `varType`
  identifier.typeAnnotation = t.tsTypeAnnotation(
    t.tsArrayType(t.tsTypeReference(t.identifier(varType)))
  );

  // Create the array expression with elements from provided variable names
  const elements = variableNames.map(name =>
    t.identifier(name)
  );
  const arrayExpr = t.arrayExpression(elements);

  // Create a variable declarator with the array expression
  const variableDeclarator = t.variableDeclarator(identifier, arrayExpr);

  // Create a variable declaration using 'const'
  const declaration = t.variableDeclaration('const', [variableDeclarator]);

  // Export the declaration
  return t.exportNamedDeclaration(declaration, []);
}

// Function to create an export declaration from given specifiers
export function createExportDeclaration(identifiers: string[]): t.ExportNamedDeclaration {
  const exportSpecifiers = identifiers.map(identifier =>
    t.exportSpecifier(t.identifier(identifier), t.identifier(identifier))
  );

  return t.exportNamedDeclaration(null, exportSpecifiers);
}

// Function to create multiple import declarations
export function createMultipleImportDeclarations(imports: { specifier: string, source: string }[]): t.ImportDeclaration[] {
  return imports.map(item =>
    t.importDeclaration(
      [t.importSpecifier(t.identifier(item.specifier), t.identifier(item.specifier))],
      t.stringLiteral(item.source)
    )
  );
}

// Combined function to handle imports and their export
export function generateImportsAndExport(imports: { specifier: string, source: string }[]): [t.ImportDeclaration[], t.ExportNamedDeclaration] {
  const importDeclarations = createMultipleImportDeclarations(imports);
  const identifiers = imports.map(importItem => importItem.specifier);
  const exportDeclaration = createExportDeclaration(identifiers);

  return [importDeclarations, exportDeclaration];
}

export function createExportAllDeclarations(sources: string[]): t.ExportAllDeclaration[] {
  return sources.map(source =>
    t.exportAllDeclaration(t.stringLiteral(source))
  );
}