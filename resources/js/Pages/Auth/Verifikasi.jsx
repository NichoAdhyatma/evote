import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import Guest from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import React from "react";
import Webcam from "react-webcam";

export default function Verifikasi({ auth }) {
    const [deviceId, setDeviceId] = React.useState(null);
    const [devices, setDevices] = React.useState([]);
    const [imageSrc, setImageSrc] = React.useState(null);
    const [isOnCam, setIsOnCam] = React.useState(false);

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        setImageSrc(webcamRef.current.getScreenshot());
        setIsOnCam(false);
    }, [webcamRef]);

    const deleteCapture = React.useCallback(() => {
        setImageSrc(null);
        setIsOnCam(true);
    }, [webcamRef]);

    const handleChange = (event) => {
        setDeviceId(event.target.value);
        setIsOnCam(true);
    };

    const handleDevices = React.useCallback(
        (mediaDevices) =>
            setDevices(
                mediaDevices.filter(({ kind }) => kind === "videoinput")
            ),
        [setDevices]
    );

    React.useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }, [handleDevices]);

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

            <FormControl fullWidth margin="dense" variant="standard">
                <InputLabel id="select-device">Pilih Device Kamera</InputLabel>
                <Select
                    labelId="select-device"
                    id="demo-simple-select"
                    label="Age"
                    onChange={handleChange}
                >
                    {devices.map((device, key) => (
                        <MenuItem key={key} value={device.deviceId}>
                            {device.label || `Device ${key + 1}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

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
                <>
                    <div className="font-semibold flex justify-between mb-2 items-center my-4">
                        <p>Hasil Foto</p>
                        <div className="flex gap-2">
                            <PrimaryButton color="success">
                                Kirim Foto
                            </PrimaryButton>
                            <DangerButton onClick={deleteCapture}>
                                Ambil ulang
                            </DangerButton>
                        </div>
                    </div>
                    <figure>
                        <img src={imageSrc} alt="your face" />
                    </figure>
                </>
            ) : (
                <p className="my-2">Ambil Foto dulu yaa gan..</p>
            )}
        </Guest>
    );
}
