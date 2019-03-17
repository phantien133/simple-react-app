import { compose } from 'recompose';
import { connect } from 'react-redux';

import List from './components/List';
import { persistentItemsSelector } from '../../selectors/persistentItemsSelector';

const PersistedList = compose(
  connect(persistentItemsSelector),
);

export default PersistedList(List);
