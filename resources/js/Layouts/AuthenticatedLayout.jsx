import { router } from "@inertiajs/react";
import LogoutIcon from "@mui/icons-material/Logout";
import ApplicationLogo from "@/Components/ApplicationLogo";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Authenticated({ user, children }) {
    const onSubmit = (e) => {
        e.preventDefault();

        router.post("/logout");
    };
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">
                    <ApplicationLogo />

                    <form onSubmit={onSubmit}>
                        <SecondaryButton
                            startIcon={<LogoutIcon />}
                            type="submit"
                        >
                            Keluar
                        </SecondaryButton>
                    </form>
                </div>
            </header>

            <div className="max-w-5xl mx-auto mt-4 px-4 py-2">
                <h2 className="font-semibold text-lg text-gray-800 leading-tight">
                    Hai , <span className="text-blue-500">{user.name}</span>
                </h2>
            </div>

            <main className="flex flex-col items-start gap-2 max-w-6xl mx-auto p-8 bg-white shadow-md mt-4 rounded-sm">
                {children}
            </main>
        </div>
    );
}
