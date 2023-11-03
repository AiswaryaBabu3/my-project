import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Project/Pages/Home';
import Login from './Project/Login';
import Sidebar from './Project/Components/Sidebar';
import Customer from './Project/Pages/Customer';
import Products from './Project/Pages/Products';
import Layout from './Project/Pages/Layout';
import Themeeditor from './Project/Pages/Themeedditor';
import Orders from './Project/Pages/Orders';
import Returns from './Project/Pages/Returns';
import Customergroup from './Project/Pages/CustomerGroup';
import Catagories from './Project/Pages/Catagories';  

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Sidebar/>}>
        <Route exact path="/home" element={<Home/>}/>
        <Route path='/home/catalog/categories' element={<Catagories/>}/>
        <Route path='/home/catalog/products' element={<Products/>}/>
          <Route path='/home/design/layout' element={<Layout/>}/>
          <Route path='/home/design/themeeditor' element={<Themeeditor/>}/>
          <Route path='/home/sales/returns' element={<Returns/>}/>
          <Route path='/home/sales/orders' element={<Orders/>}/>
          <Route path='/home/customer/customer' element={<Customer/>}/>
          <Route path='/home/customer/customergroup' element={<Customergroup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;