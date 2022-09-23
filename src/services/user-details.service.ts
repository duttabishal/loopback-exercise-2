import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {DemoDataSourceDataSource} from '../datasources';

export interface UserDetails {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getUser(): Promise<any>;
}

export class UserDetailsProvider implements Provider<UserDetails> {
  constructor(
    // DemoDataSource must match the name property in the datasource json file
    @inject('datasources.DemoDataSource')
    protected dataSource: DemoDataSourceDataSource = new DemoDataSourceDataSource(),
  ) {}

  value(): Promise<UserDetails> {
    return getService(this.dataSource);
  }
}
