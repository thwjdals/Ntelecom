import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('../components/Layout'));
const KTpaymentsystem = lazy(() => import('../pages/KTpaymentsystem'));
const LGpaymentsystem = lazy(() => import('../pages/LGpaymentsystem'));
const OpenCellPhone = lazy(() => import('../pages/OpenCellPhone'));
const Main = lazy(() => import('../pages/Main'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>에러</p>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>로딩...</p>}>
            <Main />{' '}
          </Suspense>
        ),
      },
      {
        path: 'KTpaymentsystem',
        element: <KTpaymentsystem />,
      },
      {
        path: 'LGpaymentsystem',
        element: <LGpaymentsystem />,
      },
      {
        path: 'open-cellphone',
        element: <OpenCellPhone />,
      },
    ],
  },
]);

export default router;
