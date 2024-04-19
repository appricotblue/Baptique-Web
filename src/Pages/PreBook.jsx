import React, { useEffect } from "react";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";

import SimilarProducts from "../Components/SimilarProducts/SimilarProducts";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import PreBookDetails from "../Components/PreBookDetails/PreBookDetails";

function PreBook() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <HomeHeader />
      <PreBookDetails />
      <SimilarProducts />
      <HomeFooter />
    </div>
  );
}

export default PreBook;
