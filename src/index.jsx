import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, mixins } from './assets/theme';
import GlobalStyle from './assets/GlobalStyle';
import router from './Router';

const root = ReactDOM.createRoot(document.getElementById('app'));

console.log(router);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </ThemeProvider>
  </React.StrictMode>,
);
