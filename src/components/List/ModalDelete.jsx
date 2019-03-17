// @flow
import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { rem } from 'polished';

import { CentralModal, BorderModalContainer } from '../common';

const Title = styled.p`
  font-family: 'HelveticaNeue-Light';
  font-size: ${rem('20px')};
`;

const ModelContainer = styled(BorderModalContainer)`
  padding: 0;
  background: ${props => props.theme.color.blueFormRight};
  min-width: 430px;
`;

const ModalHeader = styled.div`
  padding: 15px 20px;
  background: ${props => props.theme.color.waterBlue};
  color: ${props => props.theme.color.white};
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.color.paleGreyTwo};
  padding: 20px 35px 15px;
`;

const GroupCapcha = styled.div`
  background: ${props => props.theme.color.white};
  border: 1px solid ${props => props.theme.color.whiteFive};
  border-radius: 8px;
  overflow: hidden;
  max-width: 250px;
  margin: 0 auto;
`;

const GroupButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonCancel = styled.button`
  background: ${props => props.theme.color.warmGreyFive};
  color: ${props => props.theme.color.white};
  font-size: ${rem('13px')};
  font-family: 'HelveticaNeue-Medium';
  padding: 3px 8px;
  border-radius: 8px;
`;

const ButtonDelete = styled(ButtonCancel)`
  background: ${props => props.theme.color.monza};
  margin-left: 10px;
`;

type Props = {
  isOpen: boolean,
  close: Function,
}

const ModalDelete = ({ isOpen, close }: Props) => (
  <CentralModal isOpen={isOpen}>
    <ModelContainer>
      <ModalHeader>
        <Title>Delete modal</Title>
      </ModalHeader>
      <ModalContent>
        <GroupCapcha />
        <GroupButton>
          <ButtonCancel onClick={() => close()}>Cancel</ButtonCancel>
          <ButtonDelete>Delete</ButtonDelete>
        </GroupButton>
      </ModalContent>
    </ModelContainer>
  </CentralModal>
);

export default compose(
)(ModalDelete);
