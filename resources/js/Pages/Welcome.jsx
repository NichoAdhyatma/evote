import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, Head, router } from "@inertiajs/react";
import { Bar, Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import ApplicationLogo from "@/Components/ApplicationLogo";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Welcome({ auth, candidate, votes }) {
    const labels = ["Jumlah Suara"];

    const getRandomRGBA = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const alpha = Math.random().toFixed(5);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const data = {
        labels,
        datasets: candidate.map((candidate) => {
            const filteredVotes = votes.filter(
                (item) =>
                    item.bem_id === candidate.id || item.blm_id === candidate.id
            );
            const backgroundColor = getRandomRGBA();

            return {
                label: candidate.candidate_name,
                data: [filteredVotes.length],
                backgroundColor,
            };
        }),
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "Data hasil suara saat ini",
            },
        },
    };

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
                <div className="flex justify-end">
                    <PrimaryButton color="info" onClick={() => router.reload()}>
                        Refresh
                    </PrimaryButton>
                </div>
                <Bar data={data} options={options} />
            </div>
        </>
    );
}
