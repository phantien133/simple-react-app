// @flow
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { transparentize } from 'polished';
import { flex } from '../../styles/mixins';

const modalStyle = {
  overlay: {
    zIndex: '9',
    backgroundColor: transparentize(0.5, 'black'),
  },
};

export const CentralModal = styled(ReactModal).attrs({
  style: modalStyle,
})`
  ${flex.center}
  width: 100%;
  height: 100%;
`;

export const BorderModalScroller = styled.div`
  ${flex.center}
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const BorderModalContainer = styled.div`
  ${flex.vertical}
  align-items: stretch;
  background-color: white;
  padding: 30px;
  min-width: 600px;
  height: auto;
  border-radius: 5px;
  margin: auto;
`;
