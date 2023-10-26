import { useImages } from '../../hooks/useImages';
import { Message } from '../Message/Message';

import { ImageListWrapper } from './styles';
import { ImageListItem } from './ImageListItem';

export const ImageList = () => {
  const { images } = useImages();

  if (!images.length) {
    return <Message>Добавьте свою первую карточку!</Message>;
  }

  return (
    <ImageListWrapper>
      {images.map((img) => (
        <ImageListItem
          key={img.id}
          id={img.id}
          title={img.title}
          imgSrc={img.imgSrc}
          createdAt={img.createdAt}
        />
      ))}
    </ImageListWrapper>
  );
};
