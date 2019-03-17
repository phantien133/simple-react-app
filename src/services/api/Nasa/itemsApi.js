// @flow

import NasaApi from './NasaApi';
import { ROUTES } from './contanst';

class ItemsApi extends NasaApi {
  search(keyword) {
    return this.client.get(ROUTES.searchPath, {
      params: { q: keyword },
    });
  }
}

export const itemsApi = new ItemsApi();
