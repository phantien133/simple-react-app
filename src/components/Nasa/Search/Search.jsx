// @flow
import React from 'react';
import styled from 'styled-components';

import List from '../components/List';
import { type NasaItemType } from '../../../models/NasaItem';

const SearchField = styled.input`
  margin: 0 10px;
  border: none;
  outline: none;
  font-size: 1.3rem;
  background: transparent;
  color: ${props => props.theme.color.blueGrayActive};
  border-bottom: 1px solid ${props => props.theme.color.blueGrayActive};
  width: 80%;
`;

const InputContainer = styled.div`
  margin: 30px 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 300px;
  padding: 5px 0;
`;

type Props = {
  items: Array<NasaItemType>;
  search: Function,
}

const Search = ({ items, search }: Props) => (
  <React.Fragment>
    <InputContainer>
      <SearchField placeholder="search from Nasa API" onChange={search} />
    </InputContainer>
    <List items={items} />
  </React.Fragment>
);

export default Search;
