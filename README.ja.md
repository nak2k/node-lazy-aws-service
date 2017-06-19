# lazy-aws-service

AWS サービスを遅延初期化します。

## Installation

```
npm i lazy-aws-service -S
```

## Usage

``` javascript
import { addAwsServices } from 'lazy-aws-service';
import AWS from 'aws-sdk';

const obj = {};

addAwsServices(obj, AWS);

/*
 * Get an instance of APIGateway.
 */
const apigateway = obj.APIGateway;
```

## addAwsServices(obj, AWS)

[lazy-property](https://www.npmjs.com/package/lazy-property) を使用して、AWSサービスのプロパティを `obj` に追加します。

- `obj`
    - プロパティを追加するオブジェクト。
- `AWS`
    - aws-sdkのAWSネームスペース。

## License

MIT
