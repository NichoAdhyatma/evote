import HorizontalLinearStepper from "@/Components/Step";
import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function Layout({ auth }) {
    return (
        <Authenticated user={auth.user}>
            <div className="w-full">
                <HorizontalLinearStepper />
            </div>
        </Authenticated>
    );
}
