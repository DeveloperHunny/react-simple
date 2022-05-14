import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './components/main';
import Header from './components/header';
import Footer from "./components/footer";

//Main Contents
import Counter from "./components/main_contents/counter";
import ShopWithParams from "./components/main_contents/shop";

function NotFound(){
    return(
        <div>
            <h1>NOT FOUND PAGE</h1>
        </div>
    );
}

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Counter" element={<Counter/>}></Route>
          <Route path="/ShopMall/:userName" element={<ShopWithParams />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};


export default App;
