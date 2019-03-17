import { combineReducers } from 'redux';

import nasaItems from './nasaItemsReducer';
import persistentItems from './persistentItemsReducer';

export default combineReducers({
  nasaItems,
  persistentItems,
});
