import { createSelector } from 'reselect';
import {
  first,
  get,
  compact,
} from 'lodash';

export const nasaItemsSelector = state => state.nasaItems;

export const itemsSelector = createSelector(
  nasaItemsSelector,
  ({ items }) => items,
);

const previewLinkSelector = ({ links }) => (links || []).find(({ render, rel }) => rel === 'preview' && render === 'image');

const itemSelector = createSelector(
  previewLinkSelector,
  ({ data }) => data,
  (link, data) => {
    const { href } = link;

    if (!href) return null;

    return {
      href,
      data: first(data),
    };
  },
);

export const responseDataSelector = createSelector(
  data => get(data, 'collection.items') || [],
  (nasaItems) => {
    const items = compact(nasaItems.map(itemSelector));
    return {
      items,
      metadata: {
        totalHits: items.length,
      },
    };
  },
);
