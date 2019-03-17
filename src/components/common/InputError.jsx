// @flow
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  error: String,
  submitCount?: number,
}

const ErrorMessage = styled.p`
  font-family: 'HiraUD W3';
  font-size: ${rem('12px')};
  color: ${props => props.theme.color.errorRed};
  transition: all 0.5s ease;
  max-width: 400px;
  line-height: 1.5;
  padding-left: 15px;
`;

export const InputError = ({
  error, submitCount, ...rest
}: Props) => (
  <ErrorMessage {...rest}>
    { !!error && !!submitCount && error }
  </ErrorMessage>
);
