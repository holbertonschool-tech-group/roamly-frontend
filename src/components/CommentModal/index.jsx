import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";

import PropTypes from 'prop-types';
import { useEffect, useState } from "react";




import { Typography } from "@mui/material";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "./style.scss";
import { useDispatch } from "react-redux";
import { fetchHotels } from "../../redux/slice/hotelSlice";
import { fetchDestinations } from "../../redux/slice/destinationSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2)
    },

    "& .MuiDialogActions-root": {
        padding: theme.spacing(1)
    }
}));

function CommentModal({ handleClose, data }) {
    const dispatch = useDispatch()

    const [name, setname] = useState('');
    const [country, setcountry] = useState('');
    const [message, setmessage] = useState('');

    const validateForm = () => {
        if (!name || !country || !message) {
            Swal.fire({
                icon: "warning",
                title: "Missing Fields",
                text: "Please fill out all the fields before submitting.",
                confirmButtonText: "OK",
            });
            return false;
        }
        return true;
    };
    const handleOrder = () => {
        if (!validateForm()) return;
        const comment = {
            name: name,
            country: country,
            content: message,
        };

        // Updated data to replace the entire document or relevant fields
        const updatedHotelData = {
            ...data, // Include all existing data
            comments: [...data.comments, comment], // Update comments array
        };

        // Use PUT to update the hotel
        axios.put(
            `${import.meta.env.VITE_APP_BASE_URL}hotels/${data._id}`,
            updatedHotelData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(() => {

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thank you for your response",
                    showConfirmButton: true,
                    confirmButtonText: "Continue",
                });
                dispatch(fetchHotels())
                dispatch(fetchDestinations())
            })
            .catch((error) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Something went wrong, please try again.",
                    showConfirmButton: true,
                });
                console.error("Error updating comments:", error);
            });
    };



    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className="CommentModal"
        >


            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500]
                })}
            >

                <CloseIcon />
            </IconButton>
            <DialogContent dividers>

                <form >

                    <div className="input">
                        <div className="title">Name and Surname</div>
                        <div className="field">
                            <FaUserAlt fill="#0000001a" size={20} />
                            <input
                                required
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => {
                                    setname(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <div className="title">Country</div>
                        <div className="field">
                            <FaUserAlt fill="#0000001a" size={20} />
                            <input
                                required
                                type="text"
                                placeholder="Your country"
                                value={country}
                                onChange={(e) => {
                                    setcountry(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <div className="title">Message</div>
                        <div className="field">

                            <textarea
                                required
                                type="text"
                                placeholder="Leave a message"
                                value={message}
                                cols={12}
                                onChange={(e) => {
                                    setmessage(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </form>
            </DialogContent>
            <DialogActions>

                <Button
                    autoFocus
                    onClick={() => {
                        handleOrder()
                        handleClose();

                    }}
                >

                    <Typography
                        sx={{
                            color: "#f15d30"
                        }}
                    >

                        Confirm
                    </Typography>
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}
CommentModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default CommentModal;
