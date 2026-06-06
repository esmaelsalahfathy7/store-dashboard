import "./App.css";
import { Route, Routes } from "react-router-dom";

//Pages
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Sales from "./pages/sales/Sales";
import LogIn from "./pages/log-In/LogIn";
import ProtectedRoute from "./Components/ProtectedRoute";
import Settings from "./pages/settings/Settings";
import Financials from "./pages/financial/Financials";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="sales" element={<Sales />} />
          <Route path="financials" element={<Financials />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
