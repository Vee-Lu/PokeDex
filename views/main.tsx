import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokedex from './components/Pokedex/Pokedex.tsx'
import Types from './components/Types/Types.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },  
  {
    path: '/TrainerDex',
    element: <Pokedex/>
  },
  {
    path: '/Types',
    element: <Types/>
  },
]);

const root = document.getElementById('root');
if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    )
}
