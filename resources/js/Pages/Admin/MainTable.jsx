import AlertDialog from "@/Components/AlertDialog";
import SecondaryButton from "@/Components/SecondaryButton";
import { router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { toast, ToastContainer } from "react-toastify";
import PrimaryButton from "@/Components/PrimaryButton";
import DialogForm from "@/Components/DialogForm";

export default function MainTable({ users }) {
    const { data, setData, post, processing } = useForm({
        selectId: null,
        key: null,
    });
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [nowOpen, setnowOpen] = useState(null);
    const [url, setUrl] = useState(null);
    const { flash } = usePage().props;

    const rows = users;

    const setKey = (e) => {
        setData("key", e.target.value);
    };

    const handleClickImage = (params) => {
        setUrl(`/storage/${params.value}`);
        handleDialog(4);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
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
        { field: "token", headerName: "Token", width: 200 },
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
                autoClose: 3000,
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
        <>
            <div className="w-full">
                <h1 className="text-2xl font-semibold text-center">
                    Tabel Utama
                </h1>

                <div className="flex justify-center my-4 gap-4">
                    <PrimaryButton
                        onClick={() => handleDialog(3)}
                        color="success"
                        loading={processing}
                    >
                        Kirim Token
                    </PrimaryButton>
                    <PrimaryButton
                        onClick={() => handleDialog(1)}
                        loading={processing}
                    >
                        Generate Token
                    </PrimaryButton>
                    <PrimaryButton
                        onClick={() => handleDialog(2)}
                        color="error"
                        loading={processing}
                    >
                        Hapus Token
                    </PrimaryButton>
                    <SecondaryButton
                        color="warning"
                        loading={processing}
                        onClick={() => router.reload()}
                    >
                        Refresh Data
                    </SecondaryButton>
                </div>

                <DialogForm
                    open={open}
                    handleClose={handleResult}
                    setKey={setKey}
                />
                <DialogForm
                    open={open2}
                    handleClose={handleResult}
                    setKey={setKey}
                />
                <DialogForm
                    open={open3}
                    handleClose={handleResult}
                    setKey={setKey}
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
                    onRowSelectionModelChange={(item) => {
                        setData("selectId", item);
                    }}
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
        </>
    );
}
