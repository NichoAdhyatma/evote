import HorizontalLinearStepper from "@/Components/Step";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";

export default function Layout({ auth, candidate }) {
    const { data, setData, post, processing, errors } = useForm({
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

    const submitPilihan = () => {
        post(route("vote.store"));
    };

    return (
        <Authenticated user={auth.user}>
            <div className="w-full">
                <HorizontalLinearStepper
                    handlePilihan={handlePilihan}
                    pilihan={data.pilihan}
                    submit={submitPilihan}
                    candidate={candidate}
                />
            </div>
        </Authenticated>
    );
}
