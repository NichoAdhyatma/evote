import { Link, Head } from "@inertiajs/react";
import Button from "@mui/material/Button";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="max-w-7xl">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Button variant="contained">
                            <Link
                                href={route("dashboard")}
                                className="font-semibold"
                            >
                                Dashboard
                            </Link>
                        </Button>
                    ) : (
                        <div className="flex gap-4 items-center">
                            <Button size="small" variant="contained">
                                <Link
                                    href={route("login")}
                                    className="font-semibold"
                                >
                                    Masuk
                                </Link>
                            </Button>

                            <Button size="small" variant="outlined">
                                <Link
                                    href={route("register")}
                                    className="font-semibold"
                                >
                                    Daftar
                                </Link>
                            </Button>
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
