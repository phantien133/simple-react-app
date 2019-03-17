// @flow
import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { rem } from 'polished';

import { PageTitle } from '../Text';
import { flex, breakpoint } from '../../../styles/mixins';
import Item from './Item';


const Container = styled.div``;

const Title = styled(PageTitle)`
  color: ${props => props.theme.color.slate};
  font-family: 'HelveticaNeue-Medium';
`;

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

const TitleHeader = styled.div`
  position: relative;
`;

const AddButton = styled.div`
  ${flex.center};
  border-radius: 100%;
  background: ${props => props.theme.color.waterBlue};
  box-shadow: 2px 2px 4px 0 rgba(40, 60, 80, 0.24), -2px -2px 4px 0 rgba(40, 60, 80, 0.24);
  width: 50px;
  height: 50px;
  color: ${props => props.theme.color.white};
  font-size: ${rem('20px')};
  position: absolute;
  right: 30px;
  bottom: -25px;
  cursor: pointer;
`;

const List = () => (
  <Container>
    <TitleHeader>
      <Title>Nasa list</Title>
      <AddButton>
        <FontAwesomeIcon icon={faSearch} />
      </AddButton>
    </TitleHeader>
    <ListItem>
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
      <Item item={{
        data: {
          title: 'asdasddasd',
          secondarySreator: 'asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda asdasd asdas asdasd a asda',
        },
      }}
      />
    </ListItem>
  </Container>
);

export default compose(

)(List);
