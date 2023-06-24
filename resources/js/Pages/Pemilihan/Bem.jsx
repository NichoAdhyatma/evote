import PrimaryButton from "@/Components/PrimaryButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Bem({ handlePilihan, bem }) {
    return (
        <>
            <h1 className="font-semibold text-center my-4">
                Pemilihan Ketua-Wakil BEM FH
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
                        onClick={() => handlePilihan("bem", 1)}
                        variant={bem === 1 ? "outlined" : "contained"}
                        startIcon={bem === 1 ? <CheckCircleIcon /> : <></>}
                        color={bem === 1 ? "success" : "primary"}
                    >
                        {bem === 1 ? "Dipilih" : "pilih"}
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
                        onClick={() => handlePilihan("bem", 2)}
                        variant={bem === 2 ? "outlined" : "contained"}
                        startIcon={bem === 2 ? <CheckCircleIcon /> : <></>}
                        color={bem === 2 ? "success" : "primary"}
                    >
                        {bem === 2 ? "Dipilih" : "pilih"}
                    </PrimaryButton>
                </div>
            </div>
        </>
    );
}
