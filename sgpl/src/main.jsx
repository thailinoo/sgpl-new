import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './Components/Pages/Login.jsx';
import Historico from './Components/Pages/Historico.jsx'; 
import Devolucoes from './Components/Pages/Devolucoes.jsx'; 
import Notificacao from './Components/Pages/Notificacao.jsx';
import Devolucao1 from './Components/Pages/Devolucao1.jsx';
import Devolucao2 from './Components/Pages/Devolucao2.jsx';
import Devolucao3 from './Components/Pages/Devolucao3.jsx';
import Historico1 from './Components/Pages/Historico1.jsx';
import Historico2 from './Components/Pages/Historico2.jsx';
import Historico3 from './Components/Pages/Historico3.jsx';



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
      {
        path: '/Devolucao1', 
        element: <Devolucao1 />
      },
      {
        path: '/Devolucao2', 
        element: <Devolucao2 />
      },
      {
        path: '/Devolucao3', 
        element: <Devolucao3 />
      },
      {
        path: '/Historico1', 
        element: <Historico1 />
      },
      {
        path: '/Historico2', 
        element: <Historico2 />
      },
      {
        path: '/Historico3', 
        element: <Historico3 />
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

