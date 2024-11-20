import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { MdEmail } from "react-icons/md";

import { styled } from "@mui/material/styles";

import PropTypes from 'prop-types';
import { useState } from "react";


import { FaRegCalendarAlt } from "react-icons/fa";


import { Typography } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "./style.scss";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2)
    },

    "& .MuiDialogActions-root": {
        padding: theme.spacing(1)
    }
}));

function OrderModal({ handleClose, data }) {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const destination = data.title
    const id = data.id
    const handleOrder = () => {
        const datas = {
            id,
            name,
            email,
            destination,
            checkInDate,
            checkOutDate,
            message
        }

        console.log(datas);
    };

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className="OrderModal"
        >

            <DialogTitle
                sx={{
                    m: 0,
                    p: 2
                }}
                id="customized-dialog-title"
            >

                Complete Order
            </DialogTitle>
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
                        <div className="title">Email</div>
                        <div className="field">
                            <MdEmail fill="#0000001a" size={20} />
                            <input
                                required
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value)
                                }}
                            />
                        </div>
                    </div>

                    <div className="input">
                        <div className="title">Check-in date</div>
                        <div className="field">
                            <FaRegCalendarAlt fill="#0000001a" size={20} />
                            <input
                                type="date"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <div className="title">Check-out date</div>
                        <div className="field">
                            <FaRegCalendarAlt fill="#0000001a" size={20} />
                            <input
                                type="date"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
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
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Thank You for Booking at Pacific",
                            showConfirmButton: true,
                            confirmButtonText: "Continue",
                            // timer: 1500
                            text: "Your reservation has been successfully completed. Your request will be reviewed, and you will be contacted shortly to finalize your booking and assist with any additional details."
                        });
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
OrderModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default OrderModal;
