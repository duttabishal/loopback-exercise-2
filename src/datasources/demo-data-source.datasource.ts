import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DemoDataSource',
  connector: 'rest',
  baseURL: 'http://localhost:4000',
  crud: false,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        url: 'http://localhost:4000/users',
      },
      functions: {
        getUser: [],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DemoDataSourceDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'DemoDataSource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DemoDataSource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
