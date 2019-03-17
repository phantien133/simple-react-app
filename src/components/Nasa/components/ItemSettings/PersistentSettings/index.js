import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Settings from './Settings';
import { editItem, removeItem } from '../../../../../actions/persistentItemsActioncs';

export default compose(
  connect(null, { edit: editItem, remove: removeItem }),
  withHandlers({
    maskAsFavorite: ({ edit, item }) => () => edit({ ...item, favorite: !item.favorite }),
    removeItem: ({ remove, item }) => () => remove(item),
  }),
)(Settings);
