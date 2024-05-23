import React, { useEffect, useState } from "react";
import HomeCarousal from "../Components/HomeCarousal/HomeCarousal";
import HomeCategory from "../Components/HomeCategory/HomeCategory";
import BaptismItems from "../Components/InBaptismItems/BaptismItems";
import DemandItems from "../Components/OnDemandItems/DemandItems";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import { getAll, getBanner, getCategory, getProducts } from "../Service/Index";
import HomeHeader from "../Components/HomeCarousal/HomeHeader";

const HomeScreen = () => {
  const [allItem, setAllItem] = useState();
  const [category, setCategory] = useState([]);
  const [banner, setBanner] = useState();


  useEffect(() => {
    getAllProducts();
    getAllCategory();
    getBanners();
  }, []);


  const getBanners = async () => {
    const response = await getBanner();
    setBanner(response.data);
    console.log(response.data, '-----pppppppppppppp');
  };
  const getAllProducts = async () => {
    const response = await getProducts();
    setAllItem(response.data.products);
  };
  const getAllCategory = async () => {
    const response = await getCategory();
    setCategory(response.data);

  };



  return (
    <div>
      {/* <div style={{ position: "sticky", zIndex: "999", width: "100%" }}>
        <HomeHeader />
      </div> */}

      <div style={{ position: "absolute", width: "100%", zIndex: 9999999, top: 0 }}>
        <HomeHeader />
      </div>

      <HomeCarousal banners={banner} />
      <HomeCategory category={category} />
      <BaptismItems prod={allItem} />
      <DemandItems demand={allItem?.demands} />
      <HomeFooter />
    </div>
  );
};

export default HomeScreen;
