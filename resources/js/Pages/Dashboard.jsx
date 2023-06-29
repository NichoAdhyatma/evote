import OutlinedCard from "@/Components/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Alert, AlertTitle } from "@mui/material";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="w-full">
                <h1 className="text-2xl font-semibold text-center">
                    Pemilihan berlangsung
                </h1>

                <div className="flex gap-4 justify-center flex-wrap mt-4 w-full">
                    {auth.user.pemilihan ? (
                        <>
                            <Alert severity="success">
                                <AlertTitle>
                                    Terima kasih sudah melakukan proses
                                    pemilihan
                                </AlertTitle>

                                <strong>Silahkan Keluar akun</strong>
                            </Alert>
                        </>
                    ) : (
                        <OutlinedCard
                            title={"Calon Ketua-Wakil BEM FH dan Calon Ketua BLM FH"}
                            content={"Lakukan proses pemilihan secara jujur"}
                            onClick={() => router.visit("/pemilihan")}
                        />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
