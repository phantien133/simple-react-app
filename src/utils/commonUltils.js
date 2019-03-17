// @flow
import { transform, setWith } from 'lodash';

export const deepMapKeys = (obj: Object, mapFunc: Function) => transform(obj, (r, v, k) => {
  const value = v instanceof Object ? deepMapKeys(v, mapFunc) : v;
  return setWith(r, mapFunc(k), value);
});

export const debounce = (func: Function, wait: Number, immediate: Boolean = false) => {
  let timeout;
  return (...args) => {
    const execFunc = () => func.bind(this)(...args);
    const later = () => {
      timeout = null;
      if (!immediate) execFunc();
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) execFunc();
    return timeout;
  };
};
