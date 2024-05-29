import * as t from '@babel/types';

// Define a type for JSON values
export type JsonValue = string | number | boolean | null | JsonArray | JsonObject;
export interface JsonArray extends Array<JsonValue> { }
export interface JsonObject {
    [key: string]: JsonValue;
}

export function jsonToAst(value: JsonValue): t.Expression {
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
    const properties = Object.keys(value).map(key =>
      t.objectProperty(t.identifier(key), jsonToAst(value[key] as JsonValue))
    );
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
  typed: boolean = true
): t.VariableDeclaration {
  const identifier = t.identifier(varName);

  // Add type annotation to the identifier if typed is true
  if (typed) {
    identifier.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier(varType)));
  }

  const variableDeclarator = t.variableDeclarator(
    identifier,
    jsonToAst(jsonObject)
  );

  return t.variableDeclaration('const', [variableDeclarator]);
}
