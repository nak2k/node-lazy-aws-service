const { addAwsServices } = require('..');
const AWS = require('aws-sdk');
const assert = require('assert');

const obj = {};

addAwsServices(obj, AWS);

assert(obj.APIGateway !== undefined);
assert(obj.DynamoDB !== undefined);
assert(obj.DocumentClient !== undefined);
