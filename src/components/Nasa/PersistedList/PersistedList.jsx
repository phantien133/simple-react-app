// @flow
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import List from '../components/List';
import { type NasaItemType } from '../../../models/NasaItem';
import { InputField } from '../../common';

const SearchField = styled(InputField)`
  width: 60%;
`;

const Label = styled.label`
  font-family: 'HelveticaNeue-Medium';
  margin: 0 -35px;
  font-size: 1.3rem;
  padding-top: 3px;
  color: ${props => props.theme.color.blueCyan};
`;

const InputContainer = styled.div`
  margin: 30px 50px;
  display: flex;
  justify-content: center;
  width: 80%;
  min-width: 300px;
  padding: 5px 0;
`;

type Props = {
  items: Array<NasaItemType>;
  search: Function,
}

const PersistedList = ({ items, search }: Props) => (
  <React.Fragment>
    <InputContainer>
      <SearchField placeholder="search" onChange={search} />
      <Label>
        <FontAwesomeIcon icon={faSearch} />
      </Label>
    </InputContainer>
    <List items={items} />
  </React.Fragment>
);

export default PersistedList;
