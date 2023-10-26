import styled, { css } from 'styled-components';

import { Button } from '../Button';

export const StyledForm = styled.form`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-grey-300);
`;

export const Inputs = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const InputContainer = styled.div`
  flex-grow: 1;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-brand-600);
`;

export const Input = styled.input`
  background-color: var(--color-grey-0);
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  width: 100%;

  ${(props) =>
    props.$error &&
    css`
      border: 1px solid var(--color-red-700);
    `}

  &:disabled {
    background-color: var(--color-grey-200);
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  color: var(--color-red-700);
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
`;

export const Checkbox = styled;
