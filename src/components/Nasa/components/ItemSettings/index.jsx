import React from 'react';
import styled from 'styled-components';

import {
  type NasaItemType,
} from '../../../../models/NasaItem';
import NewItemSettings from './NewItemSettings';
import PersistentSettings from './PersistentSettings';


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

type Props = {
  item: NasaItemType,
  readOnly: boolean,
};

const ItemSettings = ({
  item,
  readOnly,
}: Props) => (
  <Container>
    <PreviewMedia src={
      item.href
    }
    />
    <Settings className="Settings">
      {
        item.isPersist ? (
          <PersistentSettings
            item={item}
            readOnly={readOnly}
          />
        ) : <NewItemSettings item={item} />
      }
    </Settings>
  </Container>
);

export default ItemSettings;
