import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import ErrorPage from '../Pages/ErrorPage';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      // {
      //   path: '/',
      //   element: ,
      // },
    ],
  },
]);

export { Route };
