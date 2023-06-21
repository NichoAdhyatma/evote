import Guest from "@/Layouts/GuestLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function OnBoarding(params) {
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => {
                setCount(count - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            router.visit("/dashboard");
        }
    }, [count]);
    return (
        <Guest>
            <Head title="Verification Success" />

            <h1 className="text-xl font-semibold text-center">
                Proses Autentikasi dan Verifikasi sudah selesai
            </h1>
            <p className="mt-4">
                Anda Akan di arahkan ke halaman selanjutnya dalam
                <span className="text-blue-500 font-bold mx-1">5</span>
                detik
            </p>

            <div className="flex justify-center text-blue-500 font-bold text-4xl my-4">
                {count}
            </div>

            {count === 0 ? (
                <div className="flex items-center gap-2">
                    <p>Tidak di Arahkan</p>{" "}
                    <Link
                        href={route("dashboard")}
                        className="text-blue-500 underline"
                    >
                        Klik disini
                    </Link>
                </div>
            ) : null}
        </Guest>
    );
}
