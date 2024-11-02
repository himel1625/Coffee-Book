import { createBrowserRouter } from 'react-router-dom';

import CoffeeCard from '../Components/CoffeeCard';
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
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/categories/:categories',
            element: <CoffeeCard />,
            loader: () => fetch('../coffees.json'),
          },
        ],
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
