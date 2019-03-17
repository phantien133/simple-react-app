// @flow
import { handleActions } from 'redux-actions';

import {
  updateNasaItems,
} from '../actions/nasaItemsActions';

export const initialState = {
  items: [],
  metadata: { totalHits: 0 },
};

export default handleActions({
  [updateNasaItems]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);
