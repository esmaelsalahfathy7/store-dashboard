import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthProvider from "./Contexts/AuthContext";
import App from "./App";
import { AllCommunityModule, ModuleRegistry } from "ag-charts-community";
import ConfirmDeleteProvider from "./Contexts/ConfirmDelete";

// Enable all Community features

import CustomAlertProvider from "./Contexts/CustomAlertContext";
import SalesOrdersProvider from "./pages/sales/Contexts/SalesOrdersContext";
ModuleRegistry.registerModules([AllCommunityModule]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CustomAlertProvider>
      <ConfirmDeleteProvider>
        <HashRouter>
          <AuthProvider>
            <SalesOrdersProvider>
              <App />
            </SalesOrdersProvider>
          </AuthProvider>
        </HashRouter>
      </ConfirmDeleteProvider>
    </CustomAlertProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
