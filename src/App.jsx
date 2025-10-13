// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import { ProductDetails } from "./Pages/ProductDetails";
import { LoginPage } from "./Pages/Login";
import RegisterPage from "./Pages/Register";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { DialogProductDetails } from "./components/DialogProductDetails";
import { Cart } from "./components/Cart";

import { ModalProductProvider } from "./contexts/ModalContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalProductProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" exact="true" element={<Home />} />
              <Route
                path="/product-listing"
                exact="true"
                element={<ProductListing />}
              />
              <Route
                path="/product/:id"
                exact="true"
                element={<ProductDetails />}
              />
              <Route path="/login" exact="true" element={<LoginPage />} />
              <Route path="/register" exact="true" element={<RegisterPage />} />
            </Routes>
            <Footer />
            <DialogProductDetails />
            <Cart />
          </CartProvider>
        </ModalProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
