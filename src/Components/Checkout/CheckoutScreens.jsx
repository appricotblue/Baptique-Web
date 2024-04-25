import React from "react";
import Style from "./CheckoutScreen.module.css";
import ArrowLeftSVG from "../../assets/svg/ArrowLeftSVG.svg";
import GpaySVG from "../../assets/svg/GpaySVG.svg";
import RadioButtonTSVG from "../../assets/svg/RadioButtonTSVG.svg";
import EditSVG from "../../assets/svg/EditSVG.svg";
import PhoneSVG from "../../assets/svg/PhoneSVG.svg";
import HouseSVG from "../../assets/svg/HouseSVG.svg";

import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import BaptismPNG1 from "../../assets/png/BaptismPNG1.png";

function CheckoutScreens() {
  const navigate = useNavigate();

  return (
    <div className={Style.mainContainer}>
      <div>
        <div className={Style.Container}>
          <div className={Style.arrowContainer}>
            <img
              src={ArrowLeftSVG}
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
          </div>
          <div className={Style.textContainer}>
            <p className={Style.checkoputText}>Check Out</p>
          </div>
        </div>
        <div
          style={{
            height: "750px",
            width: "750px",
            padding: "30px",
            paddingLeft: "90px",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Item Summary
          </p>
          <div className={Style.itemContainer}>
            <div style={{ display: "flex" }}>
              <img
                src={BaptismPNG1}
                alt=""
                style={{ width: "120px", height: "130px" }}
              />
              <div className={Style.contentContainer}>
                <p style={{ marginBottom: "15px" }}>Order Id : B1234WQE</p>
                <div className={Style.row1}>
                  <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
                    Princes Bow Dress
                  </p>
                  <p style={{ color: "black", fontWeight: "bold" }}>₹1200</p>
                </div>

                <div className={Style.row1}>
                  <p>Small</p>
                  <p>White</p>
                </div>
                <div className={Style.row1}>
                  <p>3-6 Months</p>
                  <p>1 Pc</p>
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Price Details
          </p>
          <div className={Style.itemContainer}>
            <div style={{ display: "flex" }}>
              <div className={Style.priceDetailsContainer}>
                <div className={Style.row2}>
                  <p>Total MRP</p>
                  <p>₹3600</p>
                </div>{" "}
                <div className={Style.row2}>
                  <p>Discount</p>
                  <p>₹400</p>
                </div>
                <div className={Style.row2}>
                  <p>Delivery Charges</p>
                  <p>₹100</p>
                </div>
                <div className={Style.row2}>
                  <p>Total Amount</p>
                  <p>₹3300</p>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontWeight: "bold", marginBottom: "15px" }}>Payment</p>
          <div className={Style.payTypeContainer}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "500px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={GpaySVG}
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
                <p>G Pay</p>
              </div>
              <img
                src={RadioButtonTSVG}
                alt=""
                style={{ height: "27px", width: "27px" }}
              />
            </div>
          </div>
          <div style={{ height: "10px" }} />
          <div style={{ marginLeft: "170px" }}>
            <CustomButton text={"Pay Now"} onClick={() => navigate("/login")} />
          </div>
        </div>
      </div>

      <div
        style={{
          height: "750px",
          width: "750px",
          padding: "30px",
          paddingLeft: "90px",
        }}
      >
        <div style={{ width: "550px", height: "50px" }} />
        <div
          style={{
            width: "530px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
            Delivery Address
          </p>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#60A7A1",
            }}
          >
            Add Address
          </p>
        </div>

        <div className={Style.addressContainer}>
          <div
            style={{
              width: "480px",
              height: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={RadioButtonTSVG}
                alt=""
                style={{ height: "27px", width: "27px" }}
              />
              <p>Home Address</p>
            </div>

            <img
              src={EditSVG}
              alt=""
              style={{ height: "27px", width: "27px" }}
            />
          </div>
          <div style={{ height: "10px" }} />
          <div
            style={{
              width: "150px",
              height: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={PhoneSVG}
              alt=""
              style={{ height: "27px", width: "27px" }}
            />
            <p>+91 {"9874563211"}</p>
          </div>
          <div style={{ height: "10px" }} />
          <div
            style={{
              width: "380px",
              height: "30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src={PhoneSVG}
              alt=""
              style={{ height: "27px", width: "27px" }}
            />
            <p>C104, Skyline Apartments, Nethaji Road, Kakkanad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutScreens;
