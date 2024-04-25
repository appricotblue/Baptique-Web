import React from "react";
import Style from "./Login.module.css";
import CustomButton from "../CustomButton/CustomButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function RegisterCard() {
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
        <p className={Style.registerText}>Register to Continue</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <div>
          <p>Enter Your Mobile Number to </p>
          <p>Authenticate your Number</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "35px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "40px",
            width: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          {" "}
          <p>+91</p>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", color: "grey" },
          }}
          noValidate
          autoComplete="off"
        >
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
          <TextField
            id="standard-basic"
            label="Enter Your Mobile Number"
            variant="standard"
          />
        </Box>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <CustomButton text={"Send OTP"} />
      </div>
    </div>
  );
}

export default RegisterCard;
