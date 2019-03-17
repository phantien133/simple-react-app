import { compose } from 'recompose';
import { connect } from 'react-redux';

import List from './components/List';

const PersistedList = compose(
  connect(),
);

export default PersistedList(List);
