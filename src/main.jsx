import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "/src/pages/About";
import Card from "/src/pages/Card";
import Cards from "/src/pages/Cards";
import CardsChildren from "/src/pages/CardsChildren";
import Contatti from "/src/pages/Contatti";

import { Provider } from 'react-redux';
import store from "/src/redux/store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>,
  },
  {
    path: "/cards",
    element: <Cards></Cards>,
  },
  {
    path: "/cards/:cardID",
    element: <Card />,
  },
  {
    path: "/cards-children",
    element: <CardsChildren></CardsChildren>,
    children: [
      {
        path: ":cardID",
        element: <Card />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render( //così l'app sarà in grado di "consumare" i valori forniti dal provider, i quali sono parte dello store
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router}></RouterProvider>
    </Provider>
  </React.StrictMode>
)
