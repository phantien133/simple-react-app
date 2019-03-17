// @flow
import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { rem } from 'polished';

import { PageTitle } from '../common';
import { flex } from '../../styles/mixins';
import NasaRouter from './NasaRouter';

const Container = styled.div``;

const Title = styled(PageTitle)`
  color: ${props => props.theme.color.slate};
  font-family: 'HelveticaNeue-Medium';
`;

const TitleHeader = styled.div`
  position: relative;
`;

const RightButton = styled.div`
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

const Nasa = () => (
  <Container>
    <TitleHeader>
      <Title>NFQ Da Nang</Title>
      <RightButton>
        <FontAwesomeIcon icon={faSearch} />
      </RightButton>
    </TitleHeader>
    <NasaRouter />
  </Container>
);

export default Nasa;
