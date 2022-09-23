// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {UserDetails} from '../services';

// import {inject} from '@loopback/core';
const baseUrl = '/user-details';
export class UserDetailsController {
  constructor(
    @inject('services.UserDetails') protected userDetailsService: UserDetails,
  ) {}

  @get(baseUrl)
  async getDetails(): Promise<any> {
    const result = await this.userDetailsService.getUser();
    return result;
  }
}
