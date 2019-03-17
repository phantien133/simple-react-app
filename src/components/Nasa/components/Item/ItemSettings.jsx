import React from 'react';
import styled from 'styled-components';
import Favorite from 'rmdi/lib/Favorite';
import ModeEdit from 'rmdi/lib/ModeEdit';
import Delete from 'rmdi/lib/Delete';
import Add from 'rmdi/lib/Add';

import { type NasaItemType } from '../../../../models/NasaItem';


const PreviewMedia = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
`;

export const Container = styled.li`
  background: ${props => props.theme.color.paleGreyTwo};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 190px;
  position: relative;
  &:hover {
    .Settings {
      z-index: 9;
      opacity: 9;
    }
  }
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 9;
  opacity: 0.2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(40, 60, 80, 0.8);
  transition: all 0.4s;
`;


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

const IcoAdd = styled(Add)`
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

type Props = {
  item: NasaItemType,
};

const PersistentSettings = () => (
  <Settings className="Settings">
    <IcoItems>
      <IcoFavorite />
    </IcoItems>
    <IcoItems>
      <IcoModeEdit />
    </IcoItems>
    <IcoItems>
      <IcoDelete />
    </IcoItems>
  </Settings>
);

const NewItemSettings = () => (
  <Settings className="Settings">
    <IcoItems>
      <IcoAdd />
    </IcoItems>
  </Settings>
);

const ItemSettings = ({ item }: Props) => (
  <Container>
    <PreviewMedia src={item.href} />
    { item.isPersist ? <PersistentSettings /> : <NewItemSettings />}
  </Container>
);

export default ItemSettings;
