import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Link, Head } from "@inertiajs/react";
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
    const data = {
        labels,
        datasets: [
            {
                label: candidate[0].candidate_name,
                data: [
                    votes.filter((item) => item.bem_id === candidate[0].id)
                        .length,
                ],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: candidate[1].candidate_name,
                data: [
                    votes.filter((item) => item.bem_id === candidate[1].id)
                        .length,
                ],
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: candidate[2].candidate_name,
                data: [
                    votes.filter((item) => item.bem_id === candidate[2].id)
                        .length,
                    votes.length,
                ],
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart",
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
                    <Bar data={data} options={options} />
                </h1>
            </div>
        </>
    );
}
