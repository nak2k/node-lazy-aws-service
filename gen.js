const AWS = require('aws-sdk');

const serviceClasses = Object.entries(AWS)
  .reduce((acc, [name, serviceClass]) =>
    serviceClass.serviceIdentifier ? acc.concat(name) : acc,
    [])
  .sort();

console.log(JSON.stringify(serviceClasses, null, 2));
