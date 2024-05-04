import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import ProductDetails from "./Pages/ProductDetails";
import PreBook from "./Pages/PreBook";
import MyOrders from "./Pages/MyOrdersScreen";
import CheckoutScreen from "./Pages/CheckoutScreen";
import LoginScreen from "./Pages/LoginScreen";
import { getBanner } from "./Service/Index";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {


  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/details" element={<ProductDetails />}></Route>
        <Route path="/prebook" element={<PreBook />}></Route>
        <Route path="/myOrders" element={<MyOrders />}></Route>
        <Route path="/checkout" element={<CheckoutScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
      </Routes>
    </>
  );
}

export default App;
