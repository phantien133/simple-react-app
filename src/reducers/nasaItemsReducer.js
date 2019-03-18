// @flow
import { handleActions } from 'redux-actions';

import {
  updateNasaItems,
  cleanNasaItems,
} from '../actions/nasaItemsActions';

export const initialState = {
  items: [],
  metadata: { totalHits: 0 },
  updatedAt: null,
};

export default handleActions({
  [updateNasaItems]: (state, action) => ({
    ...state, ...action.payload, updatedAt: new Date(),
  }),
  [cleanNasaItems]: () => ({ ...initialState, updatedAt: new Date() }),
}, initialState);
