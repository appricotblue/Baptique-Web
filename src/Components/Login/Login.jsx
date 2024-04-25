import React from "react";
import Style from "./Login.module.css";
import LiveSVG from "../../assets/svg/LiveSVG.svg";
import LoginSVG from "../../assets/svg/LoginSVG.svg";
import RegisterCard from "./RegisterCard";
import OtpCard from "./OtpCard";

function Login() {
  return (
    <div className={Style.Container}>
      <div className={Style.header}>
        <p className={Style.headerText}>Baptism Sale is</p>
        <img src={LiveSVG} alt="" style={{ height: "50px", width: "50px" }} />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <img
          src={LoginSVG}
          alt=""
          style={{ height: "150px", width: "150px" }}
        />
        <div />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <RegisterCard />
        {/* <OtpCard /> */}
      </div>
    </div>
  );
}

export default Login;
