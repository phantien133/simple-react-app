// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Settings from './Settings';
import { addItem } from '../../../../../actions/persistentItemsActioncs';

export default compose(
  connect(null, { add: addItem }),
)(Settings);
