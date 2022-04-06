'use strict';

export { Validator } from './validator.js';

export { ValidatorResult, ValidatorResultError, ValidationError, SchemaError } from './helpers.js';
export { SchemaScanResult, scan } from './scan.js';

export const validate = function (instance, schema, options) {
  var v = new Validator();
  return v.validate(instance, schema, options);
};
