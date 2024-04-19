import React, { useEffect } from "react";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";

import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import PreBookDetails from "../Components/PreBookDetails/PreBookDetails";
import MyOrderScreen from "../Components/MyOrders/MyOrderScreen";

function MyOrders() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <HomeHeader />
      <MyOrderScreen />
      <HomeFooter />
    </div>
  );
}

export default MyOrders;
