import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DemoOpenAPISource',
  connector: 'openapi',
  spec: 'http://localhost:4000/openapi.json',
  validate: true,
  positional: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DemoOpenApiSourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DemoOpenAPISource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DemoOpenAPISource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
