import React from 'react';
import styled from 'styled-components';

import { breakpoint } from '../../../styles/mixins';
import Item from './Item';
import { type NasaItemType } from '../../../models/NasaItem';

const ListItem = styled.div`
  padding: 30px 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  list-style-type: none;
  margin: 0 100px;
  ${breakpoint.xs`
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `}
`;

type Props = {
  items: Array<NasaItemType>,
}

const List = ({ items = [], ...props }: Props) => (
  <ListItem {...props}>
    {items && items.map(item => <Item item={item} key={item.nasaId} />)}
  </ListItem>
);

export default List;
