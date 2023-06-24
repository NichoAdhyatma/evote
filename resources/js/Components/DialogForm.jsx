import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PasswordInput from "./PasswordInput";
import SecondaryButton from "./SecondaryButton";
import PrimaryButton from "./PrimaryButton";

export default function DialogForm({ open, handleClose, setKey }) {
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Konfirmasi Key</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Masukan key untuk aksi ini
                    </DialogContentText>
                    <PasswordInput autoFocus margin="dense" label="Key" onChange={setKey} />
                </DialogContent>
                <DialogActions>
                    <SecondaryButton
                        onClick={(evemt, reason) => handleClose(false, reason)}
                    >
                        Batal
                    </SecondaryButton>
                    <PrimaryButton
                        onClick={(event, reason) => handleClose(true, reason)}
                        autoFocus
                    >
                        Oke
                    </PrimaryButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
