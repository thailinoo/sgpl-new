import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Inicial from './Components/Inicial.jsx'
import Login from'./Components/Pages/Login.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Inicial",
        element: <Inicial />
      },
      
    ]
  },

  {
    path: "/Login",
    element: <Login />
  },

]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>,
)
