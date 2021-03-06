import React from 'react';
import styled from 'styled-components';
import { map, isEmpty } from 'lodash';
import { breakpoint } from '../../../styles/mixins';
import Item from './Item';
import { type NasaItemType } from '../../../models/NasaItem';
import LoadingSpinner from '../../common/LoadingSpinner';

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
  loading: boolean,
  readOnly: boolean,
}

const List = ({
  items = [], loading = false, readOnly, ...props
}: Props) => (
  <ListItem {...props}>
    {loading ? <LoadingSpinner /> : (
      (isEmpty(items) && 'Empty list') || map(items || [], item => <Item item={item} key={item.nasaId} readOnly={readOnly} />)
    )}
  </ListItem>
);

export default List;
