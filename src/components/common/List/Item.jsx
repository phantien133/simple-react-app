// @flow
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import AccessTime from 'rmdi/lib/AccessTime';
import Favorite from 'rmdi/lib/Favorite';
import ModeEdit from 'rmdi/lib/ModeEdit';
import Delete from 'rmdi/lib/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { compose, withStateHandlers } from 'recompose';

import { type NasaItemType } from '../../../models/NasaItem';

import { breakpoint } from '../../../styles/mixins';

const Container = styled.ul`
  margin: 8px;
  background: ${props => props.theme.color.white};
  box-shadow: 0 1px 2px 0 rgba(40, 60, 80, 0.24), 0 -1px 2px 0 rgba(40, 60, 80, 0.12);
  min-width: 250px;
  ${breakpoint.xs`
    flex: 1;
    width: 30%;
  `}
`;

const ItemsOption = styled.li`
  background: ${props => props.theme.color.paleGreyTwo};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 190px;
  position: relative;
  .Settings {
      z-index: 9;
      opacity: 0.1;
    }
  &:hover {
    .Settings {
      z-index: 9;
      opacity: 9;
    }
  }
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(40, 60, 80, 0.8);
  opacity: 0;
  transition: all 0.4s;
`;

const ItemsTitle = styled.li`
  font-family: 'HelveticaNeue-UltraLight';
  padding: 20px 20px 10px;
  color: ${props => props.theme.color.darkGreyBlue};
  font-size: ${rem('30px')};
  word-wrap: break-word;
`;

const ItemsDescription = styled.li`
  font-family: 'HelveticaNeue-Medium';
  padding: 20px 20px 10px;
  overflow: hidden;
  position: relative;
  max-height: 5em;
  text-align: justify;
`;

const IcoAccessTime = styled(AccessTime)`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const ItemsTime = styled.li`
  padding: 10px 20px 16px;
  color: ${props => props.theme.color.grayIcon};
  font-size: ${rem('11px')};
  display: flex;
  align-items: center;
`;

const IconFa = styled(FontAwesomeIcon)`
  font-size: ${rem('70px')};
  cursor: pointer;
  color: ${props => props.theme.color.grayIcon};
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

type Props = {
  openDeleteModal: Function,
  closeDeleteModal: Function,
  isOpenDeleteModal: boolean,
  item: NasaItemType,
}

const Items = ({
  isOpenDeleteModal, closeDeleteModal, openDeleteModal,
  item: {
    href,
    data: {
      title,
      secondarySreator,
    } = {},
  } = {},
}: Props) => (
  <Container>
    <ItemsOption>
      <IconFa icon={faImage} />
      <Settings className="Settings">
        <IcoItems>
          <IcoFavorite />
        </IcoItems>
        <IcoItems>
          <IcoModeEdit />
        </IcoItems>
        <IcoItems onClick={() => openDeleteModal()}>
          <IcoDelete />
        </IcoItems>
      </Settings>
    </ItemsOption>
    <ItemsTitle>{title}</ItemsTitle>
    <ItemsDescription>
      {secondarySreator}
    </ItemsDescription>
    <ItemsTime>
      <IcoAccessTime />
      {' '}
      created：16 hour ago
    </ItemsTime>
  </Container>
);

export default compose(
  withStateHandlers({ isOpenDeleteModal: false }, {
    openDeleteModal: () => () => ({
      isOpenDeleteModal: true,
    }),
    closeDeleteModal: () => () => ({
      isOpenDeleteModal: false,
    }),
  }),
)(Items);
