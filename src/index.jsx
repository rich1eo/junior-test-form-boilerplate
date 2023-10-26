import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { ImagesProvider } from './context/ImagesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ImagesProvider>
      <App />
    </ImagesProvider>
  </React.StrictMode>,
);
