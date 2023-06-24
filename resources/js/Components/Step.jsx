import * as React from "react";
import Bem from "@/Pages/Pemilihan/Bem";
import Blm from "@/Pages/Pemilihan/Blm";
import Confirmation from "@/Pages/Pemilihan/Confrimation";
import PrimaryButton from "./PrimaryButton";
import {
    Box,
    Collapse,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
} from "@mui/material";
import AlertDialog from "./AlertDialog";

const steps = [
    "Calon Ketua - Wakil BEM",
    "Calon Ketua BLM",
    "Konfirmasi Pilihan",
];

export default function HorizontalLinearStepper({
    handlePilihan,
    pilihan,
    submit,
}) {
    const [activeStep, setActiveStep] = React.useState(0);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (res, reason) => {
        setOpen(false);
        if (reason && reason == "backdropClick") return;

        if (res) {
            submit();
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    return (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Semua tahap sudah diselesaikan
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Selesaikan</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className="my-4">
                        <Collapse in={activeStep === 0}>
                            <Bem
                                handlePilihan={handlePilihan}
                                bem={pilihan.bem}
                            />
                        </Collapse>

                        <Collapse in={activeStep === 1}>
                            <Blm
                                handlePilihan={handlePilihan}
                                blm={pilihan.blm}
                            />
                        </Collapse>

                        <Collapse in={activeStep === 2}>
                            <Confirmation pilihan={pilihan} />
                        </Collapse>
                    </div>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        {activeStep < 2 ? (
                            <>
                                <Box sx={{ flex: "1 1 auto" }} />

                                <div className="flex gap-4 flex-wrap">
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Kembali
                                    </Button>
                                    <Button
                                        onClick={handleNext}
                                        disabled={
                                            (!pilihan.bem &&
                                                activeStep === 0) ||
                                            (!pilihan.blm && activeStep === 1)
                                        }
                                        variant="outlined"
                                    >
                                        Selanjutnya
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col gap-6 max-w-xl mx-auto w-full justify-center items-center">
                                <PrimaryButton
                                    size="medium w-full"
                                    color="success"
                                    onClick={handleClickOpen}
                                >
                                    Konfirmasi
                                </PrimaryButton>
                                <PrimaryButton
                                    size="medium w-full"
                                    color="warning"
                                    variant="outlined"
                                    onClick={handleBack}
                                >
                                    Ubah Pilihan
                                </PrimaryButton>
                            </div>
                        )}
                    </Box>
                    <AlertDialog
                        title={"Apa kamu sudah yakin ?"}
                        content={"Periksa ulang pilihan mu .."}
                        open={open}
                        handleClose={handleClose}
                        fullWidth
                    />
                </React.Fragment>
            )}
        </Box>
    );
}
