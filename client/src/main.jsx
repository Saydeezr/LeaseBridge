import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />
      }
    ]
  } 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)