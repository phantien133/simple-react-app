// @flow
import React from 'react';
import styled from 'styled-components';
import Favorite from 'rmdi/lib/Favorite';
import FavoriteBorder from 'rmdi/lib/FavoriteBorder';
import ModeEdit from 'rmdi/lib/ModeEdit';
import Delete from 'rmdi/lib/Delete';

const styledFavoriteIcon = icon => styled(icon)`
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


const IcoFavorite = styledFavoriteIcon(Favorite);
const IcoUnFavorite = styledFavoriteIcon(FavoriteBorder);

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

type Porps = {

}

const Settings = ({ maskAsFavorite, removeItem, item }: Porps) => (
  <React.Fragment>
    <IcoItems>
      {item.favorite ? (
        <IcoFavorite onClick={maskAsFavorite} />
      ) : (
        <IcoUnFavorite onClick={maskAsFavorite} />
      )}
    </IcoItems>
    <IcoItems>
      <IcoModeEdit />
    </IcoItems>
    <IcoItems>
      <IcoDelete onClick={removeItem} />
    </IcoItems>
  </React.Fragment>
);


export default Settings;
