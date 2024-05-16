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
import { useMediaQuery } from "@mui/material";

function CheckoutScreens() {
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className={Style.mainContainer}>
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: "20px",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Item Summary</p>
              <div className={Style.itemContainer}>
                <div
                  style={{ display: "flex", gap: "30px", alignItems: "center" }}
                >
                  <img
                    src={BaptismPNG1}
                    style={{ width: "120px", height: "130px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      width: matches && '500px'
                    }}
                  >
                    <p>Order Id : B1234WQE</p>
                    <div className={Style.row1}>
                      <p style={{ fontWeight: "bold" }}>Princes Bow Dress</p>
                      <p style={{ color: "black", fontWeight: "bold" }}>
                        ₹1200
                      </p>
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
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Delivery Address</span>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#60A7A1",
                  }}
                >
                  Add Address
                </span>
              </div>

              <div className={Style.addressContainer}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
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

                <div />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={PhoneSVG}
                    alt=""
                    style={{ height: "27px", width: "27px" }}
                  />
                  <p>+91 {"9874563211"}</p>
                </div>
                <div />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
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

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                marginTop: "15px",
              }}
            >
              Price Details
            </p>

            <div className={Style.itemContainer}>
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

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                marginTop: "15px",
              }}
            >
              Payment
            </p>
            <div className={Style.payTypeContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width:'100%'
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap:'10px' }}>
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBlock: "50px",
            }}
          >
            <CustomButton text={"Pay Now"} onClick={() => navigate("/login")} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutScreens;
