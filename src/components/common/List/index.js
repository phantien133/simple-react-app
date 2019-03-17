import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import List from './List';
import { fetchNasaItems } from '../../actions/nasaItemsActions';

export default compose(
  connect(null, { fetchNasaItems }),
  lifecycle({
    componentDidMount() {
      this.props.fetchNasaItems('update');
    },
  }),
)(List);
