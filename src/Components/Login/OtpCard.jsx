import React, { useState } from "react";
import Style from "./Login.module.css";
import CustomButton from "../CustomButton/CustomButton";
import OtpInput from "react-otp-input";

function OtpCard() {
  const [otp, setOtp] = useState("");
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
        {/* <div
          style={{ height: "40px", width: "290px", backgroundColor: "grey" }}
        ></div> */}
        <OtpInput
          value={otp}
          onChange={setOtp}
          inputStyle={{
            width: "30px",
            height: "30px",
          }}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
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
