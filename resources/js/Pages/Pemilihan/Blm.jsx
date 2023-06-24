import PrimaryButton from "@/Components/PrimaryButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Blm({ handlePilihan, blm }) {
    return (
        <>
            <h1 className="font-semibold text-center my-4">
                Pemilihan Ketua BLM FH
            </h1>
            <div className="flex flex-wrap gap-8 items-center w-full justify-center">
                <div className="flex flex-col gap-4 items-center">
                    <img
                        src="/assets/profile.png"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <p>01</p>

                    <PrimaryButton
                        onClick={() => handlePilihan("blm", 1)}
                        variant={blm === 1 ? "outlined" : "contained"}
                        startIcon={blm === 1 ? <CheckCircleIcon /> : <></>}
                        color={blm === 1 ? "success" : "primary"}
                    >
                        {blm === 1 ? "Dipilih" : "pilih"}
                    </PrimaryButton>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <img
                        src="/assets/profile.png"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <p>02</p>

                    <PrimaryButton
                        onClick={() => handlePilihan("blm", 2)}
                        variant={blm === 2 ? "outlined" : "contained"}
                        startIcon={blm === 2 ? <CheckCircleIcon /> : <></>}
                        color={blm === 2 ? "success" : "primary"}
                    >
                        {blm === 2 ? "Dipilih" : "pilih"}
                    </PrimaryButton>
                </div>
            </div>
        </>
    );
}
