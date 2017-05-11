const ajv = require('ajv')();

const validatorForSchema = (schema) => {
  const validator = ajv.compile(schema);

  const validateResponse = (response) => {
    if(!validator(response)){
      throw validator.errors
    }
    return response
  }

  return {
    validateResponse
  }
}


module.exports = { validatorForSchema };
