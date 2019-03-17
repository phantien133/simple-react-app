import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import {
  TextAreaField, LeftLabel, InputGroup, InputError,
} from '../../../../common';

const Field = styled(TextAreaField).attrs({
  type: 'text',
})`
  font-size: ${rem('15px')};
  width: 100%;
  min-width: 400px;
  padding: 2px 10px;
  height: ${({ height = '50px' }) => height}
  resize: none;
  max-height: 600px;
`;

const TextInput = (props) => {
  const {
    input: {
      displayName,
      value: defaultValue,
      name,
      ...input
    },
    submitCount,
    error,
  } = props;

  const inputProps = {
    ...input,
    name,
    defaultValue,
  };

  return (
    <InputGroup>
      <LeftLabel>{displayName}</LeftLabel>
      <Field {...inputProps} />
      <InputError
        submitCount={submitCount}
        error={error}
      />
    </InputGroup>
  );
};

export default TextInput;
