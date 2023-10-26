import { memo } from 'react';
import styled from 'styled-components';

import { ReactComponent as DeleteIcon } from '../../assets/trash.svg';
import { Button } from '../Button';
import { useImages } from '../../hooks/useImages';

const StyledImageListItem = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--color-grey-300);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  max-width: 40rem;
  position: relative;
`;

const Title = styled.h3`
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  border-radius: var(--border-radius-md);
  margin-bottom: 1rem;
  object-fit: cover;
`;

const Date = styled.p`
  margin-bottom: 1.2rem;
  color: var(--color-grey-500);

  & span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
`;

const StyledDeleteButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 2rem;
  height: 2rem;
  outline: none;
`;

export const ImageListItem = memo(
  ({ id, title, imgSrc, createdAt, altDescription }) => {
    const { dispatch } = useImages();

    const handleDeleteCard = () => {
      dispatch({ type: 'DeleteImage', payload: id });
    };

    return (
      <StyledImageListItem>
        <Title>{title || 'Название отсутствует'}</Title>
        <Date>
          <span>Дата создания:</span>
          {createdAt}
        </Date>
        <Image src={imgSrc} alt={altDescription} />
        <StyledDeleteButton $variation="clear" onClick={handleDeleteCard}>
          <StyledDeleteIcon />
        </StyledDeleteButton>
      </StyledImageListItem>
    );
  },
);
