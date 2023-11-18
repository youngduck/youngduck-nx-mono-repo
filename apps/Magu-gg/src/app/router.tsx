import { createBrowserRouter } from 'react-router-dom';
import App from './app';
import AbouttPage from './pages/AbouttPage';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AbouttPage />,
      },
    ],
  },
]);

export default router;
