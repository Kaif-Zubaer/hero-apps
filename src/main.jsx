import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Installation from './components/Installation/Installation';
import AllApps from './components/AllApps/AllApps';
import AppDetails from './components/AppDetails/AppDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('/appsData.json'),
        Component: Home,
      },
      {
        path: 'apps',
        loader: () => fetch('/appsData.json'),
        Component: AllApps,
      },
      {
        path: 'appDetails/:id',
        loader: () => fetch('/appsData.json'),
        Component: AppDetails,
      },
      {
        path: 'installation',
        Component: Installation,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
