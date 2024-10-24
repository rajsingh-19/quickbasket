import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SelectedCategoryPage from "./pages/SelectedCategoryPage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import PaymentPage from "./pages/PaymentPage";
import OrderResultPage from "./pages/OrderResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<SelectedCategoryPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/details" element={<ProductDetailsPage />} />
        <Route path="/products/details/customerdetails" element={<CustomerDetailsPage />} />
        <Route path="/products/details/customerdetails/payment" element={<PaymentPage />} />
        <Route path="/products/details/customerdetails/payment/ordermsg" element={<OrderResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
