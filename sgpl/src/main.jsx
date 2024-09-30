import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './Components/Pages/Login.jsx';
import Historico from './Components/Pages/Historico.jsx'; // Importa o componente Historico
import Devolucoes from './Components/Pages/Devolucoes.jsx'; // Importa o componente Devolucoes

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
        path: '/Historico', // Adiciona a rota para o histórico
        element: <Historico />
      },
      {
        path: '/Devolucoes', // Adiciona a rota para devoluções
        element: <Devolucoes />
      }
    ]
    
  },

  {
    path: '/',
    element: <Login />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
);
