import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./app/components/hooks/useProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
