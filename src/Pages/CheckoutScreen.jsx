import React, { useEffect } from "react";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";
import ProductDetail from "../Components/ProductDetails/ProductDetail";
import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";
import CommonFooter from "../Components/CommonFooter/CommonFooter";
import CheckoutScreens from "../Components/Checkout/CheckoutScreens";

function CheckoutScreen() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <HomeHeader />
      <CheckoutScreens />
      <CommonFooter />
    </div>
  );
}

export default CheckoutScreen;
