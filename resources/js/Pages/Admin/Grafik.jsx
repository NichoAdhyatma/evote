import Authenticated from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, router } from "@inertiajs/react";
import { Bar } from "react-chartjs-2";
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

export default function Grafik({ auth, candidate, votes }) {
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
        <Authenticated user={auth.user}>
            <Head title="Admin" />

            <div className="w-full">
                <div className="flex gap-4 justify-between">
                    <PrimaryButton
                        variant="outlined"
                        onClick={() => router.visit("/admin")}
                    >
                        Kembali
                    </PrimaryButton>
                    <PrimaryButton color="info" onClick={() => router.reload()}>
                        Refresh
                    </PrimaryButton>
                </div>
                <Bar data={data} options={options} />
            </div>
        </Authenticated>
    );
}
