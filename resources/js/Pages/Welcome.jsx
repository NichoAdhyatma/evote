import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";

import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="max-w-7xl">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={
                                auth.user.level === "user"
                                    ? route("dashboard")
                                    : route("admin.index")
                            }
                            className="font-semibold"
                        >
                            <PrimaryButton>Dashboard</PrimaryButton>
                        </Link>
                    ) : (
                        <div className="flex gap-4 items-center">
                            <Link
                                href={route("login")}
                                className="font-semibold"
                            >
                                <PrimaryButton>Masuk</PrimaryButton>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-20 max-w-7xl mx-auto p-4">
                <div className="text-center my-6">
                    <ApplicationLogo />
                </div>
            </div>
        </>
    );
}
