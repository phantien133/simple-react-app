import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { rem } from 'polished';

const IconFa = styled(FontAwesomeIcon)`
  font-size: ${rem('70px')};
  cursor: pointer;
  color: ${props => props.theme.color.grayIcon};
`;

const PreviewMedia = styled.img`
font-size: ${rem('70px')};
cursor: pointer;
`;

export const Container = styled.li`
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

export const Settings = styled.div`
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


const ItemSettings = ({ background, children }) => (
  <Container>
    {background ? <PreviewMedia src={background} /> : <IconFa icon={faImage} />}
    <Settings>
      {children}
    </Settings>
  </Container>
);

export default ItemSettings;
