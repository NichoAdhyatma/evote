import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="mt-20 max-w-7xl mx-auto">
                <h1 className="text-center text-3xl font-semibold">Website Evote</h1>
            </div>
        </>
    );
}
