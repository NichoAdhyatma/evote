import AlertDialog from "@/Components/AlertDialog";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { toast, ToastContainer } from "react-toastify";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AdminIndex({ auth, users }) {
    const { post, processing } = useForm();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [nowOpen, setnowOpen] = useState(null);
    const [url, setUrl] = useState(null);
    const { flash } = usePage().props;

    const rows = users;

    const handleClickImage = (params) => {
        setUrl(`/storage/${params.value}`);
        handleDialog(4);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "image",
            headerName: "Image",
            width: 100,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleClickImage(params)}>
                        <img
                            src={`/storage/${params.value}`}
                            width={50}
                            height={50}
                            alt="foto-verifikasi"
                            className="rounded-lg"
                        />
                    </button>
                );
            },
        },
        { field: "name", headerName: "Nama", width: 200 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "token", headerName: "Token", width: 250 },
    ];

    const handleDialog = (opt) => {
        setnowOpen(opt);
        switch (opt) {
            case 1:
                setOpen(!open);
                break;
            case 2:
                setOpen2(!open2);
                break;
            case 3:
                setOpen3(!open3);
                break;
            case 4:
                setOpen4(!open4);
                break;
            default:
                break;
        }
    };

    const handleResult = (val, reason) => {
        if (reason && reason == "backdropClick") return handleDialog(nowOpen);
        switch (nowOpen) {
            case 1:
                if (val) {
                    post(route("token"));
                }
                break;
            case 2:
                if (val) {
                    post(route("delete-token"));
                }
                break;
            case 3:
                if (val) {
                    post(route("send-mail"));
                }
                break;
            case 4:
                break;
            default:
                break;
        }
        handleDialog(nowOpen);
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
                    <PrimaryButton
                        onClick={() => handleDialog(1)}
                        loading={processing}
                    >
                        Generate Token
                    </PrimaryButton>
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
                <AlertDialog
                    title={"Detail Gambar"}
                    content={<img src={url} alt="gambar-verifikasi" />}
                    open={open4}
                    handleClose={handleResult}
                    dialogAction={
                        <PrimaryButton
                            onClick={() => handleResult(true)}
                            autoFocus
                        >
                            Tutup
                        </PrimaryButton>
                    }
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
                    autoHeight
                />
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
