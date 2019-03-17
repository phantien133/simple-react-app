// @flow
import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { rem } from 'polished';
import { Route } from 'react-router-dom';

import { PageTitle } from '../common';
import { flex } from '../../styles/mixins';
import PersistedList from './PersistedList';
import Search from './Search';

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

const List = () => (
  <Container>
    <TitleHeader>
      <Title>Nasa list</Title>
      <RightButton>
        <FontAwesomeIcon icon={faSearch} />
      </RightButton>
      <Route path="/list" component={PersistedList} exact />
      <Route path="/search" component={Search} exact />
    </TitleHeader>
  </Container>
);

export default compose(

)(List);

{/* // @flow
import React from 'react';
import { Route } from 'react-router-dom';

import { Presentation } from '../../containers/BusinessPlan/Presentation';
import PlanList from '../../containers/BusinessPlan/PlanList';
import NewBizPlan from '../../containers/BusinessPlan/New';
import EditBizPlan from '../../containers/BusinessPlan/Edit';

const BusinessPlanContainer = () => (
  <React.Fragment>
    <Route path="/business-plan/presentation" component={Presentation} exact />
    <Route path="/business-plan/list" component={PlanList} exact />
    <Route path="/business-plan/new" component={NewBizPlan} exact />
    <Route path="/business-plan/edit/:bizPlanId" component={EditBizPlan} exact />
  </React.Fragment>
); */}

export default BusinessPlanContainer;
