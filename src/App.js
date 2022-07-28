import React from "react";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="store/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
