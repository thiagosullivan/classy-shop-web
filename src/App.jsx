// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import { ProductDetails } from "./Pages/ProductDetails";
import { DialogProductDetails } from "./components/DialogProductDetails";
import { ModalProductProvider } from "./contexts/AppContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalProductProvider>
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
          </Routes>
          <Footer />
          <DialogProductDetails />
        </ModalProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
