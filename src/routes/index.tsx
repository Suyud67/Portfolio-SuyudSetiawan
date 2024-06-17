import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Contact from '../pages/contact';
import ProjectPage from '../pages/project';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project',
    element: <ProjectPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
