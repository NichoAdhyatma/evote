import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="max-w-7xl">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
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

                            <Link
                                href={route("register")}
                                className="font-semibold"
                            >
                                <SecondaryButton>Daftar</SecondaryButton>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-20 max-w-7xl mx-auto">
                <h1 className="text-center text-3xl font-semibold">
                    Website Evote
                </h1>
            </div>
        </>
    );
}
