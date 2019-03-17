import {
  compose, withHandlers, withState, mapProps,
} from 'recompose';
import { connect } from 'react-redux';

import Search from './Search';
import { nasaItemsSelector } from '../../../selectors/nasaItemsSelector';
import { fetchNasaItems } from '../../../actions/nasaItemsActions';
import { debounce } from '../../../utils/commonUltils';

const debounceSearch = debounce((search, setSearchAt, value) => {
  search(value);
  setSearchAt(new Date());
}, 500);

export default compose(
  withState('searchAt', 'setSearchAt', null),
  connect(nasaItemsSelector, { search: fetchNasaItems }),
  withHandlers({
    search: ({ search, setSearchAt }) => (event) => {
      const { currentTarget } = event;
      return debounceSearch(search, setSearchAt, currentTarget.value);
    },
  }),
  mapProps(props => ({
    ...props,
    loading: props.searchAt > props.updatedAt,
  })),
)(Search);
