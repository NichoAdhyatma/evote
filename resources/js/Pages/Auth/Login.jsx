import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import PasswordInput from "@/Components/PasswordInput";
import { ToastContainer, toast } from "react-toastify";

export default function Login({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        token: "",
        remember: false,
    });

    useEffect(() => {
        if (errors.all) {
            toast.error(errors.all, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [errors]);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full"
                        label="Email"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <PasswordInput
                        id="token"
                        name="token"
                        required
                        label="Token"
                        className="mt-1 block w-full"
                        autoComplete="current-token"
                        onChange={(e) => setData("token", e.target.value)}
                    />

                    <InputError message={errors.token} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton loading={processing} type="submit">
                        Masuk
                    </PrimaryButton>
                </div>
            </form>
            <ToastContainer limit={5} />
        </GuestLayout>
    );
}
