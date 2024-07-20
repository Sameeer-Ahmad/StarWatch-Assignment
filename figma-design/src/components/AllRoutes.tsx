

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Product from "./Products";
import Inbox from "./inbox";
function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/Messages" element={<Inbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;
