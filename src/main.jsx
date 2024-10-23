import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/', // what if there is no homepage?
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'aboutme',
        element: <AboutMePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);