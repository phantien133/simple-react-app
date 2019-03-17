// @flow
import RestApi from '../RestApi';

export default class NasaApi extends RestApi {
  constructor(config: Object = {}) {
    super({
      ...config,
      baseURL: process.env.NASA_DOMAIN,
    });
  }
}
