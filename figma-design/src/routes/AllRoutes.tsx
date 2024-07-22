import {  Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Product from "../components/Products";
import Inbox from "../components/Inbox";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Messages" element={<Inbox />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
