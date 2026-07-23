import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
//Pages
import Layout from "./pages/Layout";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import SalesPage from "./pages/sales/SalesPage";
import LogInPage from "./pages/log-In/LogInPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import SettingsPage from "./pages/settings/SettingsPage";
import FinancialsPage from "./pages/financial/FinancialsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          {/* <Route path="products" element={<Products />}>
            <Route path=":page" element={<ProductsPage />} />
          </Route> */}
          <Route path="sales" element={<SalesPage />} />
          <Route path="financials" element={<FinancialsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
