import React, { useEffect, useState } from "react";
import Style from "./ProductDetails.module.css";
import ArrowLeftSVG from "../../assets/svg/ArrowLeftSVG.svg";
import PlusSVG from "../../assets/svg/PlusSVG.svg";
import MinusSVG from "../../assets/svg/MinusSVG.svg";
import ImgBig from "../../assets/png/ImgBig.png";

import BaptismPNG from "../../assets/png/BaptismPNG.png";
import { CustomModal } from "../CustomModal";
import CustomButton from "../CustomButton/CustomButton";

function ProductDetail() {
  const [counter, setCounter] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const counterSum = () => {
    const value = counter + 1
    setCounter(value)
  };
  const counterSub = () => {
    const value = counter - 1
    setCounter(value)
  };


  return (
    <div className={Style.mainContainer}>
      <div className={Style.container}>
        <div className={Style.arrowContainer}>
          <img
            src={ArrowLeftSVG}
            alt=""
            style={{ height: "30px", width: "30px" }}
          />
        </div>
        <div className={Style.imageContainer}>
          <img
            src={ImgBig}
            alt=""
            style={{ width: "407px", height: "509px" }}
          />
        </div>
        <div className={Style.contentContainer}>
          <div className={Style.contentRow}>
            <p className={Style.headerText}>Princes Bow Dress</p>
            <p className={Style.headerText}>Quantity</p>
          </div>
          <div className={Style.rateCountContainer}>
            <p className={Style.headerText}>₹1200</p>
            <div
              className={Style.counterContainer}
            >
              <img
                src={MinusSVG}
                alt=""
                style={{ height: "13px", width: "13px" }}
                onClick={counterSub}
              />
              <p className={Style.headerText}>{counter}</p>
              <img
                src={PlusSVG}
                alt=""
                style={{ height: "13px", width: "13px" }}
                onClick={counterSum}
              />
            </div>
          </div>
          <p className={Style.collectionText}>Baptism Collection</p>

          <div className={Style.sizeRow}>
            <p className={Style.headerText}>Size</p>
            <p>Size Chart</p>
          </div>
          <div className={Style.sizeContainerRow}>
            <div className={Style.sizeContainerStyle}>
              <p>Small</p>
            </div>
            <div className={Style.sizeContainerStyle}>
              <p>Medium</p>
            </div>
            <div className={Style.sizeContainerStyle}>
              <p>Large</p>
            </div>
          </div>
          <div className={Style.sizeRow}>
            <p className={Style.headerText}>Age</p>
          </div>
          <div className={Style.sizeContainerRow}>
            <div className={Style.sizeContainerStyle}>
              <p>0-3 Months</p>
            </div>
            <div className={Style.sizeContainerStyle}>
              <p>3-6 Months</p>
            </div>
            <div className={Style.sizeContainerStyle}>
              <p>6-9 Months</p>
            </div>
          </div>
          <div className={Style.yearRow}>
            <div className={Style.sizeContainerStyle}>
              <p>1 Year</p>
            </div>
            <div className={Style.sizeContainerStyle}>
              <p>2 Years</p>
            </div>
            <div className={Style.sizeContainerStyle}>
              <p>3 Years</p>
            </div>
          </div>
          <div className={Style.sizeRow}>
            <p className={Style.headerText}>Select Color</p>
          </div>
          <div className={Style.colorRow}>
            <div className={Style.colorContainer}></div>
            <div className={Style.colorContainer}></div>
            <div className={Style.colorContainer}></div>
          </div>
          <CustomButton
            text={"Show Intrest"}
            onClick={() => setOpenModal(!openModal)}
          />
        </div>
      </div>
      <div className={Style.descriptionContainer}>
        <p className={Style.descriptionHeading}>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elit eget facilisis metus nibh
          nunc velit leo sed morbi. Elementum amet purus facilisis lectus cursus
          habitant eget at sed. Fringilla egestas turpis urna nibh tempor dui.
          Volutpat est ligula ac at quam integer vel diam enim. Sed netus mollis
          donec amet tortor diam posuere sed. Malesuada sagittis ut nam nunc
          rhoncus vestibulum fringilla id. At vitae cursus convallis bibendum
          viverra purus. Eget lacus augue sed ultricies enim feugiat. Tincidunt
          fringilla id ornare felis. A tempor nisi sollicitudin nunc eros. Diam
          id donec nibh porta. Mi elementum amet eget orci feugiat. Quis eget a
          lectus blandit donec ac viverra. Amet fusce lacus senectus eu
          pellentesque pulvinar viverra enim at. Nec mus penatibus pellentesque
          id cursus. Suscipit sapien quis quis vel pharetra faucibus aenean quis
          scelerisque. Proin magna nunc ac a nunc non imperdiet vivamus. A at ac
          nisl integer a lectus eget. Ut ornare donec malesuada nullam feugiat
          et. Euismod fusce nunc aenean nibh urna imperdiet pellentesque mauris.
          Augue vitae neque feugiat nulla ornare cursus. Lorem id velit sit cum
          ultricies viverra congue. Pellentesque proin odio accumsan vitae est
          gravida vel. Sit ante pellentesque blandit ullamcorper integer
          faucibus tincidunt. Et eget aliquet quis accumsan tellus amet nec elit
          sem. Id ullamcorper justo lectus ipsum amet elementum libero eros
          egestas. Sed tellus elit ac facilisis ultricies tempus. a Integer
          tellus vitae interdum aenean neque facilisi. Sed pretium id id etiam
          aenean. Arcu elementum mollis eu eu nibh quis est. Nam tellus placerat
          nulla neque elementum at. Id malesuada ac est.
        </p>
      </div>
      <CustomModal open={openModal} setOpen={setOpenModal} />
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "black" }}
      ></div>
    </div>
  );
}

export default ProductDetail;
