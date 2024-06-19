import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OpenCapsuleModal from './context/OpenCapsuleModal';
import CapsuleData from './context/CapsuleContext';
import FilterCapsuleContext from './context/FilterCapsuleContext';
import CapsuleContext from './context/CapsuleContext';
import UpcomingCapsules from './components/pages/UpcomingCapsules';
import Footer from './components/Footer';
import PastCapsules from './components/pages/PastCapsules';
import About from './components/pages/About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/upcoming',
    element: <UpcomingCapsules />
  },
  {
    path: '/past',
    element: <PastCapsules />

  },
  {
    path: '/about',
    element: <About />

  }
]
)
root.render(
  <React.StrictMode>
    <CapsuleContext>
      <FilterCapsuleContext>
        <OpenCapsuleModal>
          <RouterProvider router={router} />
        </OpenCapsuleModal>
      </FilterCapsuleContext>
    </CapsuleContext>
  </React.StrictMode>
);

reportWebVitals();
