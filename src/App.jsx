// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import { ProductDetails } from "./Pages/ProductDetails";
import { LoginPage } from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { CartPage } from "./Pages/Cart";
import { VerifyPage } from "./Pages/Verify";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { DialogProductDetails } from "./components/DialogProductDetails";
import { Cart } from "./components/Cart";

import { ModalProductProvider } from "./contexts/ModalContext";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "react-hot-toast";
import { ForgotPasswordPage } from "./Pages/ForgotPassword";

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
              <Route path="/cart" exact="true" element={<CartPage />} />
              <Route path="/verify" exact="true" element={<VerifyPage />} />
              <Route
                path="/forgot-password"
                exact="true"
                element={<ForgotPasswordPage />}
              />
            </Routes>
            <Footer />
            <DialogProductDetails />
            <Cart />
            <Toaster />
          </CartProvider>
        </ModalProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
