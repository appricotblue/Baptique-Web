import React, { useEffect } from "react";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";
import ProductDetail from "../Components/ProductDetails/ProductDetail";
import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";
import HomeFooter from "../Components/HomeFooter/HomeFooter";

function ProductDetails() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{position:'absolute', width:'100%'}}>
        <HomeHeader />
      </div>
      <ProductDetail />
      <SimilarProducts />
      <HomeFooter />
    </div>
  );
}

export default ProductDetails;
