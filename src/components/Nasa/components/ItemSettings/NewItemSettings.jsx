// @flow
import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Add from 'rmdi/lib/Add';

import { addItem } from '../../../../actions/persistentItemsActioncs';
import { type NasaItemType } from '../../../../models/NasaItem';

const IcoItems = styled.div`
  margin: 10px;
  position: relative;
`;

const IcoAdd = styled(Add)`
  width: 80px;
  height: 80px;
  cursor: pointer;
  color: ${props => props.theme.color.white};
  border-radius: 100%;
  transition: all 0.3s;
  padding: 5px;
  &:hover {
    background: rgba(216, 216, 216, 0.24);
  }
`;

type Props = {
  add: Function,
  item: NasaItemType,
};

const NewItemSettings = ({ add, item }: Props) => (
  <React.Fragment>
    <IcoItems>
      <IcoAdd onClick={() => add(item)} />
    </IcoItems>
  </React.Fragment>
);

export default compose(
  connect(null, { add: addItem }),
)(NewItemSettings);
