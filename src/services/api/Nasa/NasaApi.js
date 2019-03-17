// @flow
import RestApi from '../RestApi';

export default class NasaApi extends RestApi {
  constructor(config: Object = {}) {
    super({
      ...config,
      baseURL: 'https://images-api.nasa.gov',
    });
  }
}
