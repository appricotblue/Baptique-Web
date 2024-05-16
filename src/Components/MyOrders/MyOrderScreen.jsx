import React from "react";
import Style from "./MyOrderScreen.module.css";
import ArrowLeftSVG from "../../assets/svg/ArrowLeftSVG.svg";
import BaptismPNG1 from "../../assets/png/BaptismPNG1.png";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

function MyOrderScreen() {
  const navigate = useNavigate();

  return (
    <div className={Style.mainContainer}>
      <div className={Style.Container}>
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            width: "100%",
          }}
        >
          <img src={BaptismPNG1} style={{ width: "180px", height: "190px" }} />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div className={Style.contentContainer}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Order Id : B1234WQE</p>
                <p style={{ color: "#BD5F2A", fontWeight: "bold" }}>
                  Payment Pending
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontWeight: "bold" }}>Princes Bow Dress</p>
                <p style={{ color: "black", fontWeight: "bold" }}>₹1200</p>
              </div>

              <div className={Style.row1}>
                <span>Small</span>
                <span>White</span>
              </div>
              <div className={Style.row1}>
                <span>3-6 Months</span>
                <span>1 Pc</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <CustomButton text={"Chat with Us"} />
          <CustomButton
            text={"Proceed to Pay"}
            onClick={() => navigate("/checkout")}
          />
        </div>
      </div>
    </div>
  );
}

export default MyOrderScreen;
