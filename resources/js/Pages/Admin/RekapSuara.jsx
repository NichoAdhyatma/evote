import { router, useForm } from "@inertiajs/react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import PrimaryButton from "@/Components/PrimaryButton";
import DialogForm from "@/Components/DialogForm";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import { Tooltip } from "@mui/material";
import AlertDialog from "@/Components/AlertDialog";

export default function RekapSuara({ users, suara }) {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [url, setUrl] = useState("");

    const { data, setData, post } = useForm({
        key: null,
        userId: null,
    });

    const setKey = (e) => {
        setData("key", e.target.value);
    };

    const handleOpen = (id) => {
        setData("userId", id);
        setOpen(true);
    };

    const handleResult = (val, reason) => {
        if (reason && reason == "backdropClick") return setOpen(false);

        if (val) {
            post("banned");
        }
        setOpen(false);
    };

    const handleCloseImage = (res, val) => {
        setOpen2(false);
    };

    const handleOpenImage = (params) => {
        setUrl(`/storage/${params}`);
        setOpen2(true);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "image",
            headerName: "Image",
            width: 100,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleOpenImage(params.value)}>
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
        { field: "name", headerName: "Nama", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },

        {
            field: "pemilihan",
            headerName: "Pemilihan",
            width: 110,
            renderCell: (params) =>
                params.value == 1 ? (
                    <Tooltip title="Suara sah">
                        <CheckCircleRoundedIcon color="success" />
                    </Tooltip>
                ) : (
                    <Tooltip title="Tidak sah">
                        <CancelIcon color="error" />
                    </Tooltip>
                ),
        },
        {
            field: "action",
            headerName: "Aksi",
            flex: 1,
            renderCell: (params) => {
                return (
                    <PrimaryButton
                        color={
                            params.row.pemilihan == 1 ? "warning" : "success"
                        }
                        onClick={() => handleOpen(params.id)}
                    >
                        {params.row.pemilihan == 1 ? "Tidak Sah" : "Sah"}
                    </PrimaryButton>
                );
            },
            disableClickEventBubbling: true,
            sortable: false,
            filterable: false,
        },
    ];

    return (
        <>
            <div className="w-full">
                <h1 className="text-2xl font-semibold text-center">
                    Rekap Suara
                </h1>
            </div>

            <div className="my-4 flex justify-end w-full gap-4">
                <div className="flex items-center gap-4 mx-4">
                    <div className="text-green-600 font-bold">Sah : {suara.sah}</div>
                    <div className="text-red-600 font-bold">Tidak Sah : {suara.tidakSah}</div>
                </div>
                <PrimaryButton onClick={() => router.visit("/grafik-suara")} color="info">
                    Grafik Suara
                </PrimaryButton>
                <PrimaryButton onClick={() => router.reload()} color="info">
                    Refresh
                </PrimaryButton>
            </div>

            <div className="flex justify-center w-full">
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 25, 50, 100]}
                    checkboxSelection={false}
                    disableRowSelectionOnClick
                    autoHeight
                />
            </div>
            <DialogForm
                open={open}
                handleClose={handleResult}
                setKey={setKey}
            />
            <AlertDialog
                title={"Detail Gambar"}
                content={<img src={url} alt="gambar-verifikasi" />}
                open={open2}
                handleClose={handleCloseImage}
                dialogAction={
                    <PrimaryButton onClick={handleCloseImage} autoFocus>
                        Tutup
                    </PrimaryButton>
                }
            />
        </>
    );
}
