# lazy-aws-service

Lazy initialize AWS services.

## Installation

```
npm i lazy-aws-service
```

## Usage

``` javascript
const { addAwsServices } = require('lazy-aws-service');
const AWS = require('aws-sdk');

const obj = {};

addAwsServices(obj, AWS);

/*
 * Get an instance of APIGateway.
 */
const apigateway = obj.APIGateway;
```

## addAwsServices(obj, AWS = require('aws-sdk'))

Add properties of AWS services into `obj` with using [lazy-property](https://www.npmjs.com/package/lazy-property).

- `obj`
    - An object to add properties.
- `AWS`
    - The AWS namespace of `aws-sdk`.

## License

MIT
