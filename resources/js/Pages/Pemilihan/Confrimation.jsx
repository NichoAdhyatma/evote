export default function Confirmation({ pilihan, candidate }) {
    return (
        <>
            <h1 className="font-semibold text-center mt-4">
                Konfirmasi Pilihan
            </h1>

            <p className="mb-4 text-center text-gray-600">
                Apakah pilihan anda dibawah ini sudah pasti?
            </p>

            <div className="flex items-center gap-8 justify-center">
                {candidate.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 items-center"
                    >
                        <div className="h-60">
                            <p className="text-center font-bold mb-2">
                                {index === 0
                                    ? "Calon Ketua Wakil BEM"
                                    : "Calon Ketua BLM"}
                            </p>
                            <img
                                src={`/storage/${item.image}`}
                                alt="kandidat"
                                width={250}
                                height={250}
                                className="min-h-[250]"
                            />
                        </div>
                        <p className="font-bold mt-8">{item.candidate_name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
