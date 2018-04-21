const lazyProperty = require('lazy-property');

const SERVICE_CLASSES = require('./services');

exports.addAwsServices = (obj, AWS) => {
  SERVICE_CLASSES.forEach(key => lazyProperty(obj, key, () => new AWS[key]()));

  lazyProperty(obj, 'DocumentClient', () => new AWS.DynamoDB.DocumentClient());
};
