import PrimaryButton from "@/Components/PrimaryButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Blm({ handlePilihan, blm, candidate }) {
    return (
        <>
            <h1 className="font-semibold text-center my-4">
                Pemilihan Ketua BLM FH
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
                            onClick={() => handlePilihan("blm", item.id)}
                            variant={blm === item.id ? "outlined" : "contained"}
                            startIcon={
                                blm === item.id ? <CheckCircleIcon /> : <></>
                            }
                            color={blm === item.id ? "success" : "primary"}
                        >
                            {blm === item.id ? "Dipilih" : "pilih"}
                        </PrimaryButton>
                    </div>
                ))}
            </div>
        </>
    );
}
