import React from "react";
import Style from "./CustomButton.module.css";

function CustomButton({ text, onClick }) {
  return (
    <div className={Style.container} onClick={onClick}>
      <p className={Style.buttonText}>{text}</p>
    </div>
  );
}

export default CustomButton;
