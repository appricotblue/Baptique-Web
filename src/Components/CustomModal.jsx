import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CloseSVG from "../assets/svg/CloseSVG.svg";
import CustomButton from "./CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 18,
  p: 4,
  minWidth: '350px',
  borderRadius: "30px",
};

export const CustomModal = ({ open, setOpen }) => {
  const [selectedValue, setSelectedValue] = useState("buynow");
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <FormControl>
            <span
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "black",
                textAlign: 'center',
                marginBottom: '30px',
                paddingInline: '20px'
              }}
            >
              Choose Interest Option
            </span>

            <RadioGroup
              aria-label="buyOptions"
              name="buyOptions"
              value={selectedValue}
              onChange={handleChange}
            >
              <div>
                <FormControlLabel
                  value="buynow"
                  control={<Radio />}
                  label="Buy Now"
                  sx={{
                    "& .css-ahj2mt-MuiTypography-root": {
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                />
                <div
                  style={{
                    fontSize: "15px",
                    color: "black",
                    marginLeft: "30px",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  Take you directly to check your item
                </div>
              </div>

              <div>
                <FormControlLabel
                  value="buyafterenquiry"
                  control={<Radio />}
                  label="Buy After Enquiry"
                  sx={{
                    "& .css-ahj2mt-MuiTypography-root": {
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    color: "black",
                    marginLeft: "30px",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  Add to your Interests and pay later on your convenience with
                  our payment assistants available on chat 24/7
                </p>
              </div>
              <div>
                <FormControlLabel
                  value="prebook"
                  control={<Radio />}
                  label="Pre-Book"
                  sx={{
                    "& .css-ahj2mt-MuiTypography-root": {
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "black",
                    },
                  }}
                />
                <p
                  style={{
                    fontSize: "15px",
                    color: "black",
                    marginLeft: "30px",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  Pre-Book the item by setting required quantity and
                  customization
                </p>
              </div>
            </RadioGroup>
            <div
              style={{
                marginTop: '30px',
                justifyContent: "center",
                display: "flex",
              }}
            >
              <CustomButton
                text={"Continue"}
                onClick={() => navigate("/prebook")}
              />
            </div>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
