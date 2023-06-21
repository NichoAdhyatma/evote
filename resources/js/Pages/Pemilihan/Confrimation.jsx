import PrimaryButton from "@/Components/PrimaryButton";

export default function Confirmation({ auth }) {
    return (
        <>
            <h1 className="font-semibold text-center mt-4">
                Konfirmasi Pilihan
            </h1>

            <p className="mb-4 text-center text-gray-600">
                Apakah pilihan anda dibawah ini sudah pasti?
            </p>

            <div className="flex flex-wrap gap-8 items-center w-full justify-center">
                <div className="flex flex-col gap-4 items-center">
                    <img
                        src="/assets/profile.png"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <p>Calon Ketua Wakil BEM FH</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <img
                        src="/assets/profile.png"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <p>Calon Ketua BLM FH</p>
                </div>
            </div>
        </>
    );
}
