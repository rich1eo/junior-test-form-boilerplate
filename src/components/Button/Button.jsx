import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);

    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;

    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  clear: css`
    background: none;

    &:hover {
      opacity: 0.8;
    }
  `,
};

export const Button = styled.button`
  border: none;

  ${(props) =>
    props.$variation ? variations[props.$variation] : variations.primary}

  &:active {
    outline: none;
  }
`;
