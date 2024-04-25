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
        <div style={{ display: "flex" }}>
          <img
            src={BaptismPNG1}
            alt=""
            style={{ width: "180px", height: "190px" }}
          />
          <div className={Style.contentContainer}>
            <p style={{ marginBottom: "15px" }}>Order Id : B1234WQE</p>
            <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
              Princes Bow Dress
            </p>
            <div className={Style.row1}>
              <p>Small</p>
              <p>White</p>
            </div>
            <div className={Style.row1}>
              <p>3-6 Months</p>
              <p>1 Pc</p>
            </div>
          </div>
          <div className={Style.priceContainer}>
            <div className={Style.row1}>
              <p></p>
              <p style={{ color: "#BD5F2A", fontWeight: "bold" }}>
                Payment Pending
              </p>
            </div>
            <div className={Style.row1}>
              <p></p>
              <p style={{ color: "black", fontWeight: "bold" }}>₹1200</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "550px",
            height: "50px",
            marginLeft: "210px",
            marginTop: "-50px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <CustomButton
            text={"Proceed to Pay"}
            onClick={() => navigate("/checkout")}
          />
          <CustomButton text={"Chat with Us"} />
        </div>
      </div>
    </div>
  );
}

export default MyOrderScreen;
