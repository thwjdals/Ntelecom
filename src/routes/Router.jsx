import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('../components/Layout'));
const KTpaymentsystem = lazy(() => import('../pages/KTpaymentsystem'));
const LGpaymentsystem = lazy(() => import('../pages/LGpaymentsystem'));
const ActivationMethods = lazy(() => import('../pages/ActivationMethods'));
const KTactivationMethod = lazy(() => import('../pages/KTactivationMethod'));
const LGactivationMethod = lazy(() => import('../pages/LGactivationMethod'));
const Main = lazy(() => import('../pages/Main'));
const Chat = lazy(() => import('../pages/Chat'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Layout />
      </Suspense>
    ),
    errorElement: <p>에러</p>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: 'KTpaymentsystem',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <KTpaymentsystem />
          </Suspense>
        ),
      },
      {
        path: 'LGpaymentsystem',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LGpaymentsystem />
          </Suspense>
        ),
      },
      {
        path: 'activation-method',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ActivationMethods />
          </Suspense>
        ),
      },
      {
        path: 'activation-method/KT',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <KTactivationMethod />
          </Suspense>
        ),
      },
      {
        path: 'activation-method/LG',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <LGactivationMethod />
          </Suspense>
        ),
      },
      {
        path: 'chat',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Chat />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
