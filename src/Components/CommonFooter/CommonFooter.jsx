import React from "react";
import Style from "./CommonFooter.module.css";

function CommonFooter() {
  return (
    <div className={Style.Container}>
      <p className={Style.footerText}>Privacy</p>
      <p className={Style.footerText}>Terms and Conditions</p>
      <p className={Style.footerText}>Contact</p>
    </div>
  );
}

export default CommonFooter;
