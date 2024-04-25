import React from "react";
import Style from "./HomeFooter.module.css";
import IconSvg from "../../assets/svg/IconSVG.svg";
import YoutubeSVG from "../../assets/svg/YoutubeSVG.svg";
import FacebookSVG from "../../assets/svg/FacebookSVG.svg";
import GoogleSVG from "../../assets/svg/GoogleSVG.svg";
import InstagramSVG from "../../assets/svg/InstagramSVG.svg";

function HomeFooter() {
  return (
    <div className={Style.footerContainer}>
      <div className={Style.logoContainer}>
        <div className={Style.row}>
          <img
            src={IconSvg}
            alt=""
            style={{ height: "150px", width: "197px" }}
          />
          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Email</p>
            <p className={Style.contentText}>sales@baptique.com</p>
            <p className={Style.headingText}>Phone</p>
            <p className={Style.contentText}>+91 9847216825</p>
          </div>
          <div className={Style.detailsCard}>
            <p className={Style.addressHead}>Address</p>
            <p className={Style.addressText}>Stella Maria Tower</p>
            <p className={Style.addressText}>Banerji Road, Ernakulam</p>
            <p className={Style.addressText}>Kerala, Kochi</p>
            <p className={Style.addressText}>6860012</p>
          </div>
          <div className={Style.detailsCard}>
            <p className={Style.addressHead}>Products</p>
            <p className={Style.addressText}>My Orders</p>
            <p className={Style.addressText}>Shipping</p>
            <p className={Style.addressText}>Collection</p>
            <p className={Style.addressText}>Delivery</p>
          </div>
        </div>
        <div className={Style.bottomContainer}>
          <img
            src={InstagramSVG}
            alt=""
            style={{ height: "40px", width: "40px", marginRight: "12px" }}
          />
          <img
            src={GoogleSVG}
            alt=""
            style={{ height: "40px", width: "40px", marginRight: "12px" }}
          />
          <img
            src={FacebookSVG}
            alt=""
            style={{ height: "40px", width: "40px", marginRight: "12px" }}
          />
          <img
            src={YoutubeSVG}
            alt=""
            style={{ height: "40px", width: "40px", marginRight: "12px" }}
          />
          <div style={{ marginLeft: "70px", display: "flex" }}>
            <p className={Style.bottomText}>Privacy Policy</p>
            <p className={Style.bottomText}>|</p>

            <p className={Style.bottomText}>Terms & Conditions</p>
          </div>
          <div style={{ marginLeft: "370px", display: "flex" }}>
            <p className={Style.bottomText}>Copyright © 2024 - Created by</p>
            <p className={Style.bottomColouredText}>
              Aindriya Marketing Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
