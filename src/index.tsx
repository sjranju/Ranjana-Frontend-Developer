import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import OpenCapsuleModal from './context/OpenCapsuleModal';
import CapsuleData from './context/CapsuleContext';

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
      <OpenCapsuleModal>
        <RouterProvider router={router} />
      </OpenCapsuleModal>
    </CapsuleData>
  </React.StrictMode>
);

reportWebVitals();
