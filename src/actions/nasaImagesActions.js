// @flow
import { createActions } from 'redux-actions';
import { ActionTypes } from '../constants';

export const {
  updateNasaImages,
} = createActions({
  [ActionTypes.UPDATE_NASA_IMAGES]: payload => payload,
});
