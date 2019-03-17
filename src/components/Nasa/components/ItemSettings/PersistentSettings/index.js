import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import Settings from './Settings';
import { editItem, removeItem } from '../../../../../actions/persistentItemsActioncs';

export default compose(
  connect(null, { edit: editItem, remove: removeItem }),
  withState('isOnEdit', 'setIsOnEdit', false),
  withHandlers({
    maskAsFavorite: ({ edit, item }) => () => edit({ ...item, favorite: !item.favorite }),
    save: ({ edit, item }) => ({ title, description }) => edit({
      ...item,
      data: {
        ...item.data,
        title,
        description,
      },
    }),
    removeItem: ({ remove, item }) => () => remove(item),
    openModalEdit: ({ setIsOnEdit }) => () => setIsOnEdit(true),
    closeModalEdit: ({ setIsOnEdit }) => () => setIsOnEdit(false),
  }),
)(Settings);
