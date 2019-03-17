// @flow
import { compose, mapProps } from 'recompose';
import { connect } from 'react-redux';

import Item from './Item';
import { itemStateSelector } from '../../../../selectors/nasaItemsSelector';

export default compose(
  connect(itemStateSelector),
  mapProps(({ item, isPersist, ...props }) => ({
    ...props,
    item: {
      ...item,
      isPersist,
    },
  })),
)(Item);
