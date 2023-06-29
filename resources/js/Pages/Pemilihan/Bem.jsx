import PrimaryButton from "@/Components/PrimaryButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Bem({ handlePilihan, bem, candidate }) {
    return (
        <>
            <h1 className="font-semibold text-center my-4">
                Pemilihan Ketua-Wakil BEM FH
            </h1>
            <div className="flex flex-wrap gap-8 items-center w-full justify-center">
                {candidate.map((item, index) => (
                    
                    <div
                        key={index}
                        className="flex flex-col gap-4 items-center"
                    >
                        <div className="h-60">
                            <img
                                src={`/storage/${item.image}`}
                                alt="kandidat"
                                width={250}
                                height={250}
                                className="min-h-[250]"
                            />
                        </div>
                        <p className="font-bold mt-4">{item.candidate_name}</p>

                        <PrimaryButton
                            className="mt-4"
                            onClick={() => handlePilihan("bem", item.id)}
                            variant={bem === item.id ? "outlined" : "contained"}
                            startIcon={
                                bem === item.id ? <CheckCircleIcon /> : <></>
                            }
                            color={bem === item.id ? "success" : "primary"}
                        >
                            {bem === item.id ? "Dipilih" : "pilih"}
                        </PrimaryButton>
                    </div>
                ))}
            </div>
        </>
    );
}
