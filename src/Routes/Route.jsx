import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Coffees from '../Pages/Coffees';
import Dashboard from '../Pages/Dashboard';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Coffees',
        element: <Coffees />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export { Route };
