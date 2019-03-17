/* eslint-disable no-underscore-dangle */
// @flow
import axios, { AxiosRequestConfig } from 'axios';
import { mapKeys, camelCase } from 'lodash';
import { deepMapKeys } from '../../utils/commonUltils';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: 'https://images-api.nasa.gov',
  timeout: 30000,
};


export default class RestApi {
  axiosClient: axios;

  constructor(config: Object = {}) {
    this.axiosClient = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._responseInterceptor();
  }

  get client() {
    return this.axiosClient;
  }

  _responseInterceptor() {
    this.client.interceptors.response.use((res) => {
      if (res.data) res.data = deepMapKeys(res.data, key => camelCase(key));
      return res;
    }, (error) => {
      const { response } = error;
      if (!response || response.status === 500) {
        throw Object.assign({ error_code: 'uncaught', message: 'serverdown' });
      }
      response.data = this._camelCaseErrorResponse(error.response.data);
      throw error.response.data;
    });
  }

  _camelCaseErrorResponse = (error: Object) => mapKeys(error, (value, key) => camelCase(key));
}
