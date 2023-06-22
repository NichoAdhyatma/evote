import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import Guest from "@/Layouts/GuestLayout";
import { Head, router, useForm } from "@inertiajs/react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import React, { useRef } from "react";
import Webcam from "react-webcam";
import { ToastContainer, toast } from "react-toastify";
import AlertDialog from "@/Components/AlertDialog";

export default function Verifikasi({ auth }) {
    const { data, setData} = useForm({
        image: null,
    });

    const [deviceId, setDeviceId] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [devices, setDevices] = React.useState([]);
    const [imageSrc, setImageSrc] = React.useState(null);
    const [isOnCam, setIsOnCam] = React.useState(false);
    const [isReject, setIsReject] = React.useState(false);

    const webcamRef = React.useRef(null);

    const dataURLtoFile = (dataURL, fileName) => {
        const arr = dataURL.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], fileName, { type: mime });
    };

    const capture = React.useCallback(() => {
        setImageSrc(webcamRef.current.getScreenshot());

        setIsOnCam(false);
    }, [webcamRef]);

    const deleteCapture = React.useCallback(() => {
        setImageSrc(null);
        setIsOnCam(true);
    }, [webcamRef]);

    const handleChange = React.useCallback(
        (event) => {
            setDeviceId(event.target.value);
            setIsOnCam(true);
        },
        [webcamRef]
    );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (res) => {
        setOpen(false);

        if (res) {
            uploadPhoto();
        }
    };

    const handleDevices = React.useCallback(
        (mediaDevices) => {
            setIsReject(false);
            setIsOnCam(true);
            setDevices(
                mediaDevices.filter(({ kind }) => kind === "videoinput")
            );
        },
        [setDevices]
    );

    const getCamAccess = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(() => {
                navigator.mediaDevices.enumerateDevices().then(handleDevices);
            })
            .catch(() => {
                setIsReject(true);
                toast.error("Anda Menolak Akses Kamera..", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };

    const uploadPhoto = () => {
        router.post("/upload", {
            _method: "patch",
            image: data.image,
        });
    };

    React.useEffect(() => {
        if (imageSrc) {
            const file = dataURLtoFile(imageSrc, `${auth.user.email}.png`);
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            setData("image", dataTransfer.files[0]);
        }
    }, [imageSrc]);

    return (
        <Guest>
            <Head title="Verifikasi" />
            <div>
                Halo
                <span className="font-semibold text-blue-500 underline underline-offset-2 mx-2">
                    {auth.user.name}
                </span>
                verifkasi foto dulu yaa
            </div>

            {devices.length > 0 && isOnCam ? (
                <FormControl fullWidth margin="dense" variant="standard">
                    <InputLabel id="select-device">
                        Pilih Device Kamera
                    </InputLabel>
                    <Select
                        labelId="select-device"
                        id="demo-simple-select"
                        label="Age"
                        value={deviceId}
                        onChange={handleChange}
                    >
                        <MenuItem disabled value="">
                            Pilih salah satu dibawah
                        </MenuItem>
                        {devices.map((device, key) => (
                            <MenuItem key={key} value={device.deviceId}>
                                {device.label || `Device ${key + 1}`}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : devices.length > 0 ? null : (
                <div className="my-4 flex justify-center">
                    <PrimaryButton onClick={getCamAccess}>
                        Beri Akses Kamera
                    </PrimaryButton>
                </div>
            )}

            {isReject && (
                <p className="text-red-500 font-semibold">
                    Anda meblokir akses kamera , silahkan atur secara manual di
                    web browser anda
                </p>
            )}

            {isOnCam ? (
                <>
                    <div className="my-4">
                        <Webcam
                            audio={false}
                            videoConstraints={{ deviceId: deviceId }}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                        />
                    </div>
                    <PrimaryButton className="w-full" onClick={capture}>
                        Ambil Foto
                    </PrimaryButton>
                </>
            ) : (
                <></>
            )}

            {imageSrc ? (
                <div className="flex flex-col gap-4 mt-4">
                    <div className="font-semibold flex justify-between items-center">
                        <p>Hasil Foto</p>
                        <div className="flex gap-2">
                            <DangerButton
                                onClick={deleteCapture}
                                color="warning"
                            >
                                Ambil ulang
                            </DangerButton>
                        </div>
                    </div>
                    <figure>
                        <img src={imageSrc} alt="your face" />
                    </figure>

                    <PrimaryButton
                        color="success"
                        className="w-full"
                        onClick={handleClickOpen}
                    >
                        Kirim Foto
                    </PrimaryButton>
                </div>
            ) : (
                <p className="my-2">Ambil Foto dulu yaa gan..</p>
            )}

            <AlertDialog
                open={open}
                handleClose={handleClose}
                title={"Yakin ingin mengirim foto ini ?"}
                content={
                    "Foto ini akan di kirim ke panita sebagai bukti verifikasi"
                }
            />
            <ToastContainer limit={5} />
        </Guest>
    );
}
