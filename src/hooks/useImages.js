import { useContext } from 'react';

import { ImagesContext } from '../context/ImagesProvider';

export function useImages() {
  const imagesContext = useContext(ImagesContext);

  if (!imagesContext) {
    throw new Error('Out of Context Provider boundaries!');
  }

  return imagesContext;
}
