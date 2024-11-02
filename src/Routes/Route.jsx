import { createBrowserRouter } from 'react-router-dom';
import CoffeeCard from '../Components/CoffeeCard';
import MainLayout from '../MainLayout/MainLayout';
import CoffeeDetail from '../Pages/CoffeeDetail';
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
        element: <Coffees />,
        loader: () => fetch('../coffees.json'),
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
      {
        path: '/coffee/:id',
        element: <CoffeeDetail />,
        loader: () => fetch('../coffees.json'),
      },
    ],
  },
]);

export { Route };
