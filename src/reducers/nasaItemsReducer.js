// @flow
import { handleActions } from 'redux-actions';

import {
  updateNasaItems,
  cleanNasaItems,
} from '../actions/nasaItemsActions';

export const initialState = {
  items: [],
  metadata: { totalHits: 0 },
};

export default handleActions({
  [updateNasaItems]: (state, action) => ({
    ...state, ...action.payload,
  }),
  [cleanNasaItems]: () => initialState,
}, initialState);
