import { Link } from "@inertiajs/react";

export default function ApplicationLogo(props) {
    return (
        <Link href={route("home")}>
            <h1 className="text-blue-500 font-bold text-xl">Pemira FH</h1>
        </Link>
    );
}
