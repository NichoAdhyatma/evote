import PrimaryButton from "@/Components/PrimaryButton";

export default function Blm({ auth }) {
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

                    <PrimaryButton>Pilih</PrimaryButton>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <img
                        src="/assets/profile.png"
                        alt=""
                        width={250}
                        height={250}
                    />
                    <p>02</p>

                    <PrimaryButton>Pilih</PrimaryButton>
                </div>
            </div>
        </>
    );
}
