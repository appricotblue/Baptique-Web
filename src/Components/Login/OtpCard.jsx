import React from "react";
import Style from "./Login.module.css";
import CustomButton from "../CustomButton/CustomButton";

function OtpCard() {
  return (
    <div className={Style.CardContainer}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <p className={Style.registerText}>Verify OTP</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <div>
          <p>Enter the OTP send to </p>
          <p>your Mobile Number</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <div
          style={{ height: "40px", width: "290px", backgroundColor: "grey" }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div>
          <p>Didn't Recive an OTP ?</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <div>
          <p>Resend</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <CustomButton text={"Verify"} />
      </div>
    </div>
  );
}

export default OtpCard;
