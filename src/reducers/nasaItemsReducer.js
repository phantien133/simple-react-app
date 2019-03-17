// @flow
import { handleActions } from 'redux-actions';

import {
  updateNasaItems,
  cleanNasaItems,
} from '../actions/nasaItemsActions';

export const initialState = {
  items: [],
  metadata: { totalHits: 0 },
  updatedAt: new Date(),
};

export default handleActions({
  [updateNasaItems]: (state, action) => ({
    ...state, ...action.payload, updatedAt: new Date().getTime(),
  }),
  [cleanNasaItems]: () => initialState,
}, initialState);
