import React, { useEffect } from "react";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";

import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import PreBookDetails from "../Components/PreBookDetails/PreBookDetails";
import MyOrderScreen from "../Components/MyOrders/MyOrderScreen";
import CommonFooter from "../Components/CommonFooter/CommonFooter";

function MyOrders() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div style={{ position: "absolute", width: "100%" }}>
        <HomeHeader />
      </div>
      <MyOrderScreen />
      <CommonFooter />
    </div>
  );
}

export default MyOrders;
