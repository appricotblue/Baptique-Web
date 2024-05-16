import React, { Fragment, useEffect, useState } from "react";
import Style from "./ProductDetails.module.css";
import ArrowLeftSVG from "../../assets/svg/ArrowLeftSVG.svg";
import PlusSVG from "../../assets/svg/PlusSVG.svg";
import MinusSVG from "../../assets/svg/MinusSVG.svg";
import ImgBig from "../../assets/png/ImgBig.png";

import BaptismPNG from "../../assets/png/BaptismPNG.png";
import { CustomModal } from "../CustomModal";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate, useParams } from "react-router-dom";
import { ChatModal } from "../ChatModal";
import { Box, Chip, IconButton } from "@mui/material";
import { Minus, Plus } from "@phosphor-icons/react";

const sizes = ["Small", "Medium", "Large"];

const ageGroup = [
  "0-3 Months",
  "3-6 Months",
  "6-9 Months",
  "1 Year",
  "2 Year",
  "3 Year",
];

function ProductDetail() {
  const [counter, setCounter] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedAge, setSelectedAge] = useState(ageGroup[0]);

  const navigate = useNavigate();

  const counterSum = () => {
    const value = counter + 1;
    setCounter(value);
  };
  const counterSub = () => {
    const value = counter - 1;
    setCounter(value);
  };

  const setSize = (size) => {
    setSelectedSize(size);
  };

  const setAge = (age) => {
    setSelectedAge(age);
  };

  const { id } = useParams();

  return (
    <div className={Style.mainContainer}>
      <div className={Style.container}>
        <img className={Style.imageContainer} src={ImgBig} alt="" />

        <div className={Style.contentContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div className={Style.contentRow}>
              <p className={Style.headerText}>Princes Bow Dress</p>
              <p className={Style.headerText}>₹1200</p>
              <p className={Style.collectionText}>Baptism Collection</p>
            </div>

            <div className={Style.rateCountContainer}>
              <p className={Style.headerText}>Quantity</p>
              <div className={Style.counterContainer}>
                <IconButton onClick={counterSub}>
                  <Minus size={13} color="black" />
                </IconButton>
                <span style={{ fontSize: "18px" }}>{counter}</span>
                <IconButton onClick={counterSum}>
                  <Plus size={13} color="black" />
                </IconButton>
              </div>
            </div>
          </div>

          <div className={Style.sizeRow}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className={Style.headerText}>Size</p>
              <p onClick={() => setOpenChat(!openChat)}>Size Chart</p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {sizes?.map((size, ind) => (
                <div key={ind} onClick={() => setSize(size)}>
                  <Chip
                    sx={{
                      cursor: "pointer",
                      backgroundColor: selectedSize === size && "#E1F3F2",
                      color: selectedSize === size && "#60A7A1",
                      fontWeight: 600,
                    }}
                    label={size}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={Style.sizeRow}>
            <p className={Style.headerText}>Age</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                maxWidth: "300px",
              }}
            >
              {ageGroup?.map((age, ind) => (
                <div key={ind} onClick={() => setAge(age)}>
                  <Chip
                    sx={{
                      cursor: "pointer",
                      backgroundColor: selectedAge === age && "#E1F3F2",
                      color: selectedAge === age && "#60A7A1",
                      fontWeight: 600,
                    }}
                    label={age}
                  />
                </div>
              ))}
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
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "black" }}
      ></div>
      <CustomModal open={openModal} setOpen={setOpenModal} />
      <ChatModal open={openChat} setOpen={setOpenChat} />
    </div>
  );
}

export default ProductDetail;
