import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Orders from "./Orders";
import Home from "./Home";
import ImportOrders from "./ImportOrders";
import AddProducts from "./AddProducts";
import MyNavbar from "./MyNavbar";
import EditProduct from "./EditProduct";

function App() {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/import-orders" element={<ImportOrders />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
