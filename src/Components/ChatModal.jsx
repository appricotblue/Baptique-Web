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
    borderRadius: 5,
    top: "50%",
    left: "85%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 700,
    bgcolor: "background.paper",
    boxShadow: 18,
    p: 4,
};

export const ChatModal = ({ open, setOpen }) => {
    const [selectedValue, setSelectedValue] = useState("female"); // Initialize state with default value
    const navigate = useNavigate();

    const handleClose = () => setOpen(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    console.log(selectedValue);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <FormControl component="fieldset">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: 550,
                            }}
                        >
                            <div></div>
                            <FormLabel
                                component="legend"
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "black",
                                }}
                            >
                                Choose Interest Option
                            </FormLabel>
                            <img
                                src={CloseSVG}
                                alt=""
                            // style={{ height: "40px", width: "40px", marginRight: "12px" }}
                            />
                        </div>

                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={selectedValue}
                            onChange={handleChange}
                        >
                            <div>
                                <FormControlLabel
                                    value="buynow"
                                    control={<Radio />}
                                    label="Buy now"
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
                                    Take you directly to check ypur item
                                </p>
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
                                width: 530,
                                marginTop: 17,
                                justifyContent: "center",
                                display: "flex",
                            }}
                        >
                            <CustomButton
                                text={"Continue"}
                                onClick={() => navigate("/prebook")}
                            />
                        </div>
                    </FormControl> */}

                </Box>
            </Modal>
        </div>
    );
};
