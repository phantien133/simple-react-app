import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import Search from './Search';
import { nasaItemsSelector } from '../../../selectors/nasaItemsSelector';
import { fetchNasaItems } from '../../../actions/nasaItemsActions';
import { debounce } from '../../../utils/commonUltils';

const debounceSearch = debounce((search, value) => search(value), 1000);

export default compose(
  connect(nasaItemsSelector, { search: fetchNasaItems }),
  withHandlers({
    search: ({ search }) => (event) => {
      const { currentTarget } = event;
      return debounceSearch(search, currentTarget.value);
    },
  }),
)(Search);
