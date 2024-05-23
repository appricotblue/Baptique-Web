import React, { useEffect, useState } from "react";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";
import ProductDetail from "../Components/ProductDetails/ProductDetail";
import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import { getProductDetails } from "../Service/Index";


function ProductDetails() {
  const [item, setItem] = useState();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const response = await getProductDetails();
    setItem(response?.data);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ position: 'absolute', width: '100%' }}>
        <HomeHeader />
      </div>
      <ProductDetail item={item} />
      <SimilarProducts />
      <HomeFooter />
    </div>
  );
}

export default ProductDetails;
