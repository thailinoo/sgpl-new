import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './Components/Pages/Login.jsx';
import Historico from './Components/Pages/Historico.jsx'; 
import Devolucoes from './Components/Pages/Devolucoes.jsx'; 
import Notificacao from './Components/Pages/Notificacao.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element: <Login />
      },
      {
        path: '/Historico', 
        element: <Historico />
      },
      {
        path: '/Devolucoes', 
        element: <Devolucoes />
      },

    ]
  },
  {
    path: '/Notificacao', 
    element: <Notificacao />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

