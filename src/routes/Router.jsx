import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('../components/Layout'));
const KTpaymentsystem = lazy(() => import('../pages/KTpaymentsystem'));
const LGpaymentsystem = lazy(() => import('../pages/LGpaymentsystem'));
const ActivateMethods = lazy(() => import('../pages/ActivateMethods'));
const Main = lazy(() => import('../pages/Main'));
const Chat = lazy(() => import('../pages/Chat'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>에러</p>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Main />{' '}
          </Suspense>
        ),
      },
      {
        path: 'KTpaymentsystem',
        element: (
          <Suspense fallback="..loading">
            {' '}
            <KTpaymentsystem />
          </Suspense>
        ),
      },
      {
        path: 'LGpaymentsystem',
        element: (
          <Suspense fallback="..loading">
            <LGpaymentsystem />
          </Suspense>
        ),
      },
      {
        path: 'open-cellphone',
        element: (
          <Suspense fallback="..loading">
            <ActivateMethods />
          </Suspense>
        ),
      },
      {
        path: 'chat',
        element: (
          <Suspense fallback="..loading">
            {' '}
            <Chat />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
