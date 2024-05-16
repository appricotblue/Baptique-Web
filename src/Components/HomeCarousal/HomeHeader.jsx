import React, { useState } from "react";
import Style from "./HomeCarousal.module.css";
import IconSvg from "../../assets/svg/IconSVG.svg";
import HeartSVG from "../../assets/svg/HeartSVG.svg";
import ZoomSVG from "../../assets/svg/ZoomSVG.svg";
import { Heart, List, MagnifyingGlass } from "@phosphor-icons/react";
import { Box, Drawer, IconButton, useMediaQuery } from "@mui/material";

function HomeHeader() {
  const matches = useMediaQuery("(min-width:750px)");

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className={Style.headerRow}>
      <div className={Style.logoContainer}>
        <img src={IconSvg} alt="" />
      </div>

      <div className={Style.textContainer}>
        <p className={Style.headerText}>Collections</p>
        <p className={Style.headerText}>About</p>
        <p className={Style.headerText}>Contact</p>
        <p className={Style.headerText}>My orders</p>
      </div>

      <div className={Style.iconContainer}>
        <IconButton>
          <MagnifyingGlass size={32} color="black" />
        </IconButton>
        <IconButton>
          <Heart size={32} color="black" />
        </IconButton>
      </div>

      <Box sx={{ display: matches ? "none" : "flex", gap: "15px" }}>
        <Box>
          <IconButton>
            <MagnifyingGlass size={32} />
          </IconButton>
          <IconButton>
            <Heart size={32} />
          </IconButton>
        </Box>

        <IconButton onClick={toggleDrawer(true)}>
          <List size={32} />
        </IconButton>
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "25px",
            padding: "40px",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingInlineEnd: "120px",
            }}
          >
            <span>Collections</span>
            <span>About</span>
            <span>Contact</span>
            <span>My Orders</span>
          </Box>

          <Box sx={{ marginInline: "auto" }}>
            <img src={IconSvg} />
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default HomeHeader;
