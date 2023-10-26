import { createContext, useEffect, useReducer } from 'react';

import { API_KEY, URL } from '../utils/constant';
import { getError, getLocalDateString } from '../utils/helpers';

export const ImagesContext = createContext();

const initialState = {
  images: [],
  status: 'loading',
  error: '',
};

// В TypeScript я прячу кейсы в enums, здесь можно было бы создать объект например
function reducer(state, action) {
  switch (action.type) {
    case 'DataReceived':
      const images = action.payload.map((image) => {
        return {
          id: image.id,
          title: image.description,
          imgSrc: image.urls.small,
          createdAt: getLocalDateString(new Date(image.created_at)),
          altDescription: image.alt_description,
        };
      });

      return {
        ...state,
        images,
        status: 'ready',
        error: '',
      };

    case 'DataFailed':
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };

    case 'NewImage':
      return {
        ...state,
        images: [action.payload, ...state.images],
        status: 'ready',
        error: '',
      };

    case 'DeleteImage':
      return {
        ...state,
        images: state.images.filter((image) => image.id !== action.payload),
      };

    default:
      throw new Error('Unknown action 🙁');
  }
}

export function ImagesProvider({ children }) {
  const [{ images, status, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    fetch(
      `${URL}/photos/random/?client_id=${API_KEY}&orientation=landscape&count=5`,
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (data) {
          dispatch({ type: 'DataReceived', payload: data });
        } else {
          // Иногда был баг с кодом 200, но данных не было
          throw new Error('403');
        }
      })
      .catch((error) => {
        dispatch({ type: 'DataFailed', payload: getError(error.message) });
      });
  }, []);

  return (
    <ImagesContext.Provider
      value={{
        images,
        status,
        error,
        dispatch,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}
