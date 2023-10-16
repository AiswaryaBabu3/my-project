import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Project/Home';
import Login from './Project/Login';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
