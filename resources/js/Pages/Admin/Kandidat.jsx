import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AlertDialog from "@/Components/AlertDialog";

export default function Kandidat({ candidate }) {
    const { data, setData, post, processing } = useForm({
        candidate_name: null,
        level: "bem",
        image: null,
        key: null,
    });

    const rows = candidate;

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
        { field: "candidate_name", headerName: "Nama", flex: 1 },
        { field: "level", headerName: "Level", flex: 1 },
    ];

    const [level, setLevel] = useState("bem");

    const [open, setOpen] = useState(false);

    const [file, setFile] = useState(null);

    const [url, setUrl] = useState(null);

    const [open2, setOpen2] = useState(false);

    const handleClose = (val, reason) => {
        if (reason && reason == "backdropClick") return setOpen(!open);

        if (val) {
            post(route("kandidat.store"));
        }

        setOpen(!open);
    };

    const handleCloseImage = (val, res) => {
        setOpen2(false);
    };

    const handleChange = (e) => {
        setLevel(e.target.value);
        setData("level", e.target.value);
    };

    console.log(data.level)

    const handleSetFile = (file) => {
        setFile(file);
        setData("image", file);
    };

    const handleOpenImage = (params) => {
        setUrl(`/storage/${params}`);
        setOpen2(true);
    };

    return (
        <>
            <div className="w-full">
                <h1 className="text-2xl text-center font-bold">Kandidat</h1>
                <div className="flex justify-center my-4">
                    <PrimaryButton onClick={() => setOpen(true)}>
                        Tambah Kandidat
                    </PrimaryButton>
                </div>
                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogTitle>Form tambah candidate</DialogTitle>
                    <DialogContent className="flex flex-col gap-6">
                        <FormControl fullWidth>
                            <TextField
                                autoFocus
                                id="name"
                                label="Nama Kandidat"
                                fullWidth
                                variant="standard"
                                onChange={(e) =>
                                    setData("candidate_name", e.target.value)
                                }
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <Select
                                labelId="level"
                                id="level-select"
                                value={level}
                                label="Level"
                                onChange={handleChange}
                                variant="standard"
                            >
                                <MenuItem value={"bem"}>BEM</MenuItem>
                                <MenuItem value={"blm"}>BLM</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <MuiFileInput
                                label="Foto Kandidat"
                                id="image-kandidat"
                                value={file}
                                onChange={handleSetFile}
                                variant="standard"
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                autoFocus
                                id="key"
                                label="Key"
                                fullWidth
                                variant="standard"
                                onChange={(e) => setData("key", e.target.value)}
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(e, res) => handleClose(false, res)}>
                            Cancel
                        </Button>
                        <PrimaryButton
                            onClick={(e, res) => handleClose(true, res)}
                        >
                            Tambah
                        </PrimaryButton>
                    </DialogActions>
                </Dialog>

                <DataGrid
                    rows={rows}
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

                <AlertDialog
                    title={"Detail Gambar"}
                    content={<img src={url} alt="gambar-kandidat" />}
                    open={open2}
                    handleClose={handleCloseImage}
                    dialogAction={
                        <PrimaryButton onClick={handleCloseImage} autoFocus>
                            Tutup
                        </PrimaryButton>
                    }
                />
            </div>
        </>
    );
}
