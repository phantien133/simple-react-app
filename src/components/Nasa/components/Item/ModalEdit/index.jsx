// @flow
import React from 'react';
import { compose, withHandlers } from 'recompose';
import styled from 'styled-components';
import Close from 'rmdi/lib/Close';
import { rem } from 'polished';
import { withFormik } from 'formik';

import {
  CentralModal, BorderModalContainer,
} from '../../../../common';
import TextInput from './TextInput';
import itemValidation from './itemValidation';

const Title = styled.p`
  font-family: 'HiraginoSans-W5';
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
  background: ${props => props.theme.color.white};
  padding: 20px 35px;
`;

const GroupButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const IcoClose = styled(Close)`
  cursor: pointer;
  font-size: ${rem('15px')}
`;

const ButtonCancel = styled.button`
  color: ${props => props.theme.color.warmGreyFive};
  background: transparent;
  font-size: ${rem('16px')};
  font-family: 'HiraginoSans-W6';
  padding: 3px;
  border-bottom: 2px solid ${props => props.theme.color.warmGreyFive};
  &import('../../../../../models/NasaItem')
   import('../../../../../models/NasaItem')
   import('../../../../../models/NasaItem')
   import('../../../../../models/NasaItem')
  }import('../../../../../models/NasaItem')
`;

const ButtonSave = styled(ButtonCancel)`
  border-bottom: 2px solid ${props => props.theme.color.waterBlue};
  color: ${props => props.theme.color.waterBlue};
  margin-left: 20px;
  width: 40px;
  &:active{
    margin-left: 21px;
  }
`;

type Props = {
  isOpen: boolean,
  close: Function,
  errors: Object,
  submitCount: number,
  handOnChangeTitle: Function,
  handOnChangeDescription: Function,
  handleSubmit: Function,
  item: Object,
}

const ModalShare = ({
  isOpen, close,
  item: {
    data: { title, description },
  },
  handleSubmit, handOnChangeTitle, handOnChangeDescription, errors, submitCount,
}: Props) => (
  <CentralModal isOpen={isOpen}>
    <ModelContainer>
      <ModalHeader>
        <Title>Edit </Title>
        <IcoClose onClick={() => close()} />
      </ModalHeader>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <TextInput
            input={{
              name: 'title',
              displayName: 'Title',
              value: title,
              onChange: handOnChangeTitle,
            }}
            error={errors.title}
            submitCount={submitCount}
          />
          <TextInput
            input={{
              name: 'description',
              displayName: 'Description',
              value: description,
              onChange: handOnChangeDescription,
              height: '400px',
            }}
            error={errors.description}
            submitCount={submitCount}
          />
          <GroupButton>
            <ButtonCancel type="button" onClick={() => close()}>Cancel</ButtonCancel>
            <ButtonSave type="submit">Save</ButtonSave>
          </GroupButton>
        </form>
      </ModalContent>
    </ModelContainer>
  </CentralModal>
);

export default compose(
  withFormik({
    mapPropsToValues: ({ item: { data: { title, description } } }) => ({
      title,
      description,
    }),
    validationSchema: itemValidation,
    handleSubmit: (values, { props }) => props.save(values) && props.close(),
  }),
  withHandlers({
    handOnChangeTitle: ({
      setFieldValue,
    }) => event => setFieldValue('title', event.target.value),
    handOnChangeDescription: ({
      setFieldValue,
    }) => event => setFieldValue('description', event.target.value),
  }),
)(ModalShare);
