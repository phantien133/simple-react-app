// @flow
import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

export const {
  addItem,
  editItem,
  removeItem,
} = createActions({
  [ActionTypes.ADD_ITEM]: payload => ({ item: payload }),
  [ActionTypes.EDIT_ITEM]: payload => ({ item: payload }),
  [ActionTypes.REMOVE_ITEM]: payload => ({ nasaId: payload }),
});
