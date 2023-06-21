import OutlinedCard from "@/Components/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="w-full">
                <h1 className="text-2xl font-semibold text-center">
                    Pemilihan berlangsung
                </h1>

                <div className="flex gap-4 justify-center flex-wrap mt-4 w-full">
                    <OutlinedCard
                        title={"Calon Ketua-Wakil BEM FH dan Ketua BLM FH"}
                        content={"Lakukan proses pemilihan secara jujur"}
                        onClick={() => router.visit("/bem")}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
