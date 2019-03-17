// @flow
import { handleActions } from 'redux-actions';
import { get, omit, merge } from 'lodash';

import {
  addItem,
  removeItem,
  editItem,
} from '../actions/persistentItemsActioncs';

export const initialState = {
  items: {},
};

const nasaIdSelector = item => get(item, 'data.nasaId');

export default handleActions({
  [addItem]: (state, action) => {
    const { payload: { item } } = action;
    const nasaId = nasaIdSelector(item);
    const { items } = state;
    if (!nasaId || items[nasaId]) return state;
    return {
      ...state,
      items: {
        ...items,
        [nasaId]: {
          ...item,
          isPersist: true,
        },
      },
    };
  },
  [removeItem]: () => (state, action) => {
    const { payload: { item } } = action;
    const { items } = state;
    const nasaId = nasaIdSelector(item);
    return {
      ...state,
      items: omit(items, nasaId),
    };
  },
  [editItem]: () => (state, action) => {
    const { payload: { item } } = action;
    const { items } = state;
    const nasaId = nasaIdSelector(item);
    return {
      ...state,
      items: {
        ...items,
        [nasaId]: merge({}, items[nasaId] || {}, items, { isPersist: true }),
      },
    };
  },
}, initialState);
