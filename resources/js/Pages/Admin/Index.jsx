import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function AdminIndex({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="w-full">
                <h1 className="text-2xl font-semibold text-center">
                    Halo mas admin
                </h1>
            </div>
        </AuthenticatedLayout>
    );
}
