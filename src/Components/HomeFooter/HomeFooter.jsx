import React from "react";
import Style from "./HomeFooter.module.css";
import IconSvg from "../../assets/svg/IconSVG.svg";
import YoutubeSVG from "../../assets/svg/YoutubeSVG.svg";
import FacebookSVG from "../../assets/svg/FacebookSVG.svg";
import GoogleSVG from "../../assets/svg/GoogleSVG.svg";
import InstagramSVG from "../../assets/svg/InstagramSVG.svg";
import { FacebookLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function HomeFooter() {
  return (
    <div className={Style.footerContainer}>
      <div className={Style.logoContainer}>
        <img src={IconSvg} style={{ height: "150px", width: "197px" }} />

        <div className={Style.row}>
          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Email</p>
            <p className={Style.contentText}>sales@baptique.com</p>
            <p className={Style.headingText}>Phone</p>
            <p className={Style.contentText}>+91 9847216825</p>
          </div>

          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Address</p>
            <p className={Style.contentText} style={{ maxWidth: "200px" }}>
              Stella Maria Tower Banerji Road, Ernakulam Kerala, Kochi 6860012
            </p>
          </div>

          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Products</p>
            <p className={Style.contentText}>My Orders</p>
            <p className={Style.contentText}>Shipping</p>
            <p className={Style.contentText}>Collection</p>
            <p className={Style.contentText}>Delivery</p>
          </div>
        </div>

        <div className={Style.rowResp}>
          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Email</p>
            <p className={Style.contentText}>sales@baptique.com</p>
            <p className={Style.headingText}>Phone</p>
            <p className={Style.contentText}>+91 9847216825</p>
          </div>

          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Products</p>
            <p className={Style.contentText}>My Orders</p>
            <p className={Style.contentText}>Shipping</p>
            <p className={Style.contentText}>Collection</p>
            <p className={Style.contentText}>Delivery</p>
          </div>

          <div className={Style.detailsCard}>
            <p className={Style.headingText}>Address</p>
            <p className={Style.contentText} style={{ maxWidth: "200px" }}>
              Stella Maria Tower Banerji Road, Ernakulam Kerala, Kochi 6860012
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div>
            <img src={InstagramSVG} />
            <img src={GoogleSVG} />
            <img src={FacebookSVG} />
            <img src={YoutubeSVG} />
          </div>

          <span>
            Privacy Policy | Terms & Conditions
          </span>
        </div>

        <div style={{ textAlign: "center", display:'flex',gap:'5px' ,flexWrap:'wrap', alignItems:'center', justifyContent:'center' }}>
          <span>Copyright © 2024 - Created by </span>
          <Link style={{ color: "#60a7a1", textDecoration: "none", }}>
            Aindriya Marketing Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
