import {
  compose, withState, mapProps, withHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { isEmpty, filter, debounce } from 'lodash';

import PersistedList from './PersistedList';
import { persistentItemsSelector } from '../../../selectors/persistentItemsSelector';

const debounceSearch = debounce((setKeyword, value) => {
  setKeyword(value);
}, 300);

export default compose(
  connect(persistentItemsSelector),
  withState('keyword', 'setKeyword', null),
  withHandlers({
    search: ({ setKeyword }) => (event) => {
      const { currentTarget } = event;
      return debounceSearch(setKeyword, currentTarget.value);
    },
  }),
  mapProps((props) => {
    const { keyword, items } = props;
    let filterItems = Object.values(items);
    if (!isEmpty(keyword)) {
      filterItems = filter(filterItems, (item) => {
        const { data: { title, description } } = item;
        return title.includes(keyword) || description.includes(keyword);
      });
    }
    return {
      ...props,
      items: filterItems,
    };
  }),
)(PersistedList);
