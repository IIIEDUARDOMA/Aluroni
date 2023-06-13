import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Cardapio from './Pages/Cardapio';
import Inicio from 'Pages/Inicio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);
