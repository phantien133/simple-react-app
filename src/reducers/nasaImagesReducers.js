// @flow
import { handleActions } from 'redux-actions';

import {
  updateNasaImages,
} from '../actions/nasaImagesActions';

export const initialState = {
  nasaImages: [],
  page: [],
};

export default handleActions({
  [updateNasaImages]: (state, action) => ({
    ...state, ...action.payload,
  }),
}, initialState);
