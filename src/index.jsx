import ReactDOM from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, mixins } from './assets/theme';
import GlobalStyle from './assets/GlobalStyle';
import CssBaseline from '@mui/material/CssBaseline';
import router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...mixins }}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </ThemeProvider>
  </React.StrictMode>,
);
