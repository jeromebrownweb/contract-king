import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RootLayout from './RootLayout.jsx';
import HomePage from './HomePage.jsx';
import JobDetailsPage from './pages/JobDetailsPage.jsx'; // We will create this file
import EmployerContractsPage from './pages/EmployerContractsPage.jsx';
import CreateContractPage from './pages/CreateContractPage.jsx';
import ViewApplicantsPage from './pages/ViewApplicantsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'jobs/:id',
        element: <JobDetailsPage />,
      },
      {
        path: 'employer/contracts',
        element: <EmployerContractsPage />,
      },
      {
        path: 'employer/contracts/create',
        element: <CreateContractPage />,
      },
      {
        path: 'employer/contracts/:id/applicants',
        element: <ViewApplicantsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
