import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function AlertDialog({ handleClose, title, content, open }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <SecondaryButton onClick={() => handleClose(false)}>
                        Tidak
                    </SecondaryButton>
                    <PrimaryButton
                        onClick={() => handleClose(true)}
                        autoFocus
                        variant="standard"
                    >
                        Iya yakin
                    </PrimaryButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
