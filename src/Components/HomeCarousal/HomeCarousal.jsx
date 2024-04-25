import React from "react";
import Style from "./HomeCarousal.module.css";
import HomeHeader from "./HomeHeader";

const HomeCarousal = () => {
  return (
    <div className={Style.carousalContainer}>
      <HomeHeader />

      <div className={Style.offerContainer}>
        <p className={Style.baptismText}>Baptism Collections</p>
        <div className={Style.line} />
        <p className={Style.offerText}>20% OFF</p>
      </div>
    </div>
  );
};

export default HomeCarousal;
