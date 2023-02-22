import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import Header from './components/menu'
import Home from "./components/Home";
import ShowLists from "./components/listas/getListas";
import DescribeList from "./components/listas";
import AddProduct from './components/itens/createItem'
import AddList from './components/listas/cadastrarLista'

import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="font-link">
    <React.StrictMode>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="showlists" element={<ShowLists/>} />
          <Route exact path ="describe-list/:id" element={<DescribeList />} />
          <Route exact path ="add-list" element={<AddList />} />
          <Route exact path ="add-product" element={<AddProduct />} />
          <Route path="*" element={<h1>Route does not exist</h1>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);