import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OpenCapsuleModal from './context/OpenCapsuleModal';
import CapsuleData from './context/CapsuleContext';
import FilterCapsuleContext from './context/FilterCapsuleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
]
)
root.render(
  <React.StrictMode>
    <CapsuleData>
      <FilterCapsuleContext>
        <OpenCapsuleModal>
          <RouterProvider router={router} />
        </OpenCapsuleModal>
      </FilterCapsuleContext>
    </CapsuleData>
  </React.StrictMode>
);

reportWebVitals();
