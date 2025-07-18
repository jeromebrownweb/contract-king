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
import ContractSuccessPage from './pages/ContractSuccessPage.jsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import './components/ErrorBoundary/ErrorBoundary.css';

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
        path: 'contract/success',
        element: <ContractSuccessPage />,
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
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
);
