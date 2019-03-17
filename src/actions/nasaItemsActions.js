// @flow
import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

export const {
  updateNasaItems,
  fetchNasaItems,
} = createActions({
  [ActionTypes.UPDATE_NASA_ITEMS]: ({
    collection = {
      items: [],
      totometadata: { totalHits: 0 },
    },
  }) => collection,
  [ActionTypes.FETCH_NASA_ITEMS]: payload => ({ keyword: payload }),
});
