import AlertDialog from "@/Components/AlertDialog";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { toast, ToastContainer } from "react-toastify";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nama", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "token", headerName: "Token", width: 250 },
];

export default function AdminIndex({ auth, users }) {
    const { post, processing } = useForm();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [nowOpen, setnowOpen] = useState(null);
    const { flash } = usePage().props;

    const rows = users;

    const handleDialog = (opt) => {
        setnowOpen(opt);
        switch (opt) {
            case 1:
                setOpen(true);
                break;
            case 2:
                setOpen2(true);
                break;
            case 3:
                setOpen3(true);
                break;
            default:
                break;
        }
    };

    const handleResult = (val) => {
        switch (nowOpen) {
            case 1:
                if (val) {
                    post(route("token"));
                }
                setOpen(false);
                break;
            case 2:
                if (val) {
                    post(route("delete-token"));
                }
                setOpen2(false);
                break;
            case 3:
                if (val) {
                    post(route("send-mail"));
                }
                setOpen3(false);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-center",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [flash.success]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="w-full">
                <h1 className="text-2xl font-semibold text-center">
                    Halo mas admin
                </h1>

                <div className="flex justify-center my-4 gap-4">
                    <SecondaryButton
                        onClick={() => handleDialog(3)}
                        color="success"
                        loading={processing}
                    >
                        Kirim Token
                    </SecondaryButton>
                    <SecondaryButton
                        onClick={() => handleDialog(1)}
                        loading={processing}
                    >
                        Generate Token
                    </SecondaryButton>
                    <SecondaryButton
                        onClick={() => handleDialog(2)}
                        color="error"
                        loading={processing}
                    >
                        Hapus Token
                    </SecondaryButton>
                </div>

                <AlertDialog
                    title={"Generate Token ?"}
                    content={"Token akan di generate untuk semua user"}
                    open={open}
                    handleClose={handleResult}
                />
                <AlertDialog
                    title={"Hapus Token ?"}
                    content={"Token akan di hapus untuk semua user"}
                    open={open2}
                    handleClose={handleResult}
                />
                <AlertDialog
                    title={"Kirim Token ?"}
                    content={"Token akan di kirim untuk semua user"}
                    open={open3}
                    handleClose={handleResult}
                />
            </div>

            <div className="flex justify-center w-full">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
