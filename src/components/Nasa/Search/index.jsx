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
}, 1000);

export default compose(
  withState('searchAt', 'setSearchAt', null),
  connect(nasaItemsSelector, { search: fetchNasaItems }),
  withHandlers({
    search: ({ search, setSearchAt, setKeyword }) => (event) => {
      const { target } = event;
      setSearchAt(new Date().getTime());
      debounceSearch(search, setSearchAt, target.value);
    },
    onKeyUp: ({ search, setSearchAt }) => (event) => {
      const { keyCode, target } = event;
      if (keyCode === 13) {
        setSearchAt(new Date().getTime());
        debounceSearch(search, setSearchAt, target.value);
      }
    },
  }),
  mapProps(props => ({
    ...props,
    loading: props.updatedAt && props.searchAt > props.updatedAt,
  })),
)(Search);
