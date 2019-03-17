// @flow
import { transform, setWith } from 'lodash';

export const deepMapKeys = (obj: Object, mapFunc: Function) => transform(obj, (r, v, k) => {
  const value = v instanceof Object ? deepMapKeys(v, mapFunc) : v;
  return setWith(r, mapFunc(k), value);
});
