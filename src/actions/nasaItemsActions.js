// @flow
import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

export const {
  updateNasaItems,
  fetchNasaItems,
  cleanNasaItems,
} = createActions({
  [ActionTypes.UPDATE_NASA_ITEMS]: payload => payload,
  [ActionTypes.FETCH_NASA_ITEMS]: payload => ({ keyword: payload }),
  [ActionTypes.CLEAN_NASA_ITEMS]: undefined,
});
