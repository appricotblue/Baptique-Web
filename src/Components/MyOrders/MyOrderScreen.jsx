import React from "react";
import Style from "./MyOrderScreen.module.css";
import ArrowLeftSVG from "../../assets/svg/ArrowLeftSVG.svg";
import BaptismPNG1 from "../../assets/png/BaptismPNG1.png";

function MyOrderScreen() {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.Container}>
        <div className={Style.arrowContainer}>
          <img
            src={ArrowLeftSVG}
            alt=""
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div className={Style.toggleWrapper}>
          <div className={Style.toggleContainer}>
            <p className={Style.toggleText}>Orders</p>
          </div>
          <div className={Style.toggleContainer}>
            <p className={Style.toggleText}>Bookings</p>
          </div>
          <div className={Style.toggleContainer}>
            <p className={Style.toggleText}>Interests</p>
          </div>
        </div>
      </div>
      <div className={Style.itemContainer}>
        <img
          src={BaptismPNG1}
          alt=""
          style={{ width: "180px", height: "190px" }}
        />
        <div></div>
      </div>
    </div>
  );
}

export default MyOrderScreen;
