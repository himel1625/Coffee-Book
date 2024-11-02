import { createBrowserRouter } from 'react-router-dom';

import CoffeeCard from '../Components/CoffeeCard';
import MainLayout from '../MainLayout/MainLayout';
import CoffeeDetails from '../Pages/CoffeeDetails';
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
            loader: () => fetch('../coffees.json'),
            element: <CoffeeCard />,
          },
        ],
      },
      {
        path: '/Coffees',
        loader: () => fetch('../coffees.json'),
        element: <Coffees />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
      {
        path: '/CoffeeDetails',
        element: <CoffeeDetails />,
      },
    ],
  },
]);

export { Route };
