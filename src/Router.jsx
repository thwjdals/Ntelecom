import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';

const Main = lazy(() => import('./Main'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <p>에러</p>,
    children: [
      {
        path: '/home',
        element: (
          <Suspense fallback={<p>로딩...</p>}>
            <Main />{' '}
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
