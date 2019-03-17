import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import Favorite from 'rmdi/lib/Favorite';
import ModeEdit from 'rmdi/lib/ModeEdit';
import Delete from 'rmdi/lib/Delete';


const IcoFavorite = styled(Favorite)`
  margin: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${props => props.theme.color.white};
  border-radius: 100%;
  transition: all 0.3s;
  padding: 5px;
  &:hover {
    background: rgba(216, 216, 216, 0.24);
  }
`;

const IcoModeEdit = styled(ModeEdit)`
  margin: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${props => props.theme.color.white};
  border-radius: 100%;
  padding: 5px;
  border-radius: 100%;
  &:hover {
    background: rgba(216, 216, 216, 0.24);
  }
`;

const IcoItems = styled.div`
  margin: 10px;
  position: relative;
`;

const IcoDelete = styled(Delete)`
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${props => props.theme.color.white};
  border-radius: 100%;
  transition: all 0.3s;
  padding: 5px;
  &:hover {
    background: rgba(216, 216, 216, 0.24);
  }
`;

const PersistentSettings = () => (
  <React.Fragment>
    <IcoItems>
      <IcoFavorite />
    </IcoItems>
    <IcoItems>
      <IcoModeEdit />
    </IcoItems>
    <IcoItems>
      <IcoDelete />
    </IcoItems>
  </React.Fragment>
);


export default compose(

)(PersistentSettings);
