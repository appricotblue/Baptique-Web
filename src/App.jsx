import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import ProductDetails from "./Pages/ProductDetails";

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
      </Routes>
    </>
  );
}

export default App;
