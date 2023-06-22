import HorizontalLinearStepper from "@/Components/Step";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Layout({ auth }) {
    const { data, setData } = useForm({
        pilihan: {
            bem: null,
            blm: null,
        },
    });

    const handlePilihan = (field, value) => {
        setData((prevState) => ({
            ...prevState,
            pilihan: {
                ...prevState.pilihan,
                [field]: value,
            },
        }));
    };

    console.log(data.pilihan);

    return (
        <Authenticated user={auth.user}>
            <div className="w-full">
                <HorizontalLinearStepper handlePilihan={handlePilihan} pilihan={data.pilihan} />
            </div>
        </Authenticated>
    );
}
