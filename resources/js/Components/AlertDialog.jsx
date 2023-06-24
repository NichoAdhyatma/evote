import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function AlertDialog({
    handleClose,
    title,
    content,
    open,
    dialogAction,
    ...props
}) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                {...props}
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {dialogAction ? (
                        dialogAction
                    ) : (
                        <>
                            <SecondaryButton
                                onClick={(evemt, reason) =>
                                    handleClose(false, reason)
                                }
                            >
                                Tidak
                            </SecondaryButton>
                            <PrimaryButton
                                onClick={(event, reason) =>
                                    handleClose(true, reason)
                                }
                                autoFocus
                            >
                                Iya yakin
                            </PrimaryButton>
                        </>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}
