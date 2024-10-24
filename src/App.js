import React from "react";
import HomePage from "./pages/HomePage";
import SelectedCategoryPage from "./pages/SelectedCategoryPage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import PaymentPage from "./pages/PaymentPage";
import OrderResultPage from "./pages/OrderResultPage";

function App() {
  return (
    <div>
      <HomePage />
      <SelectedCategoryPage />
      <ProductListingPage />
      <ProductDetailsPage />
      <CustomerDetailsPage />
      <PaymentPage />
      <OrderResultPage />
    </div>
  );
}

export default App;
