import * as React from "react";
import { Box, Tab } from "@mui/material";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import MainTable from "./MainTable";
import { Head } from "@inertiajs/react";
import RekapSuara from "./RekapSuara";
import Kandidat from "./Kandidat";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function LabTabs({ auth, users, candidate, flash }) {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
        <Authenticated user={auth.user}>
            <Head title="Admin" />

            <div className="w-full">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Tabel Utama" value="1" />
                            <Tab label="Rekap Suara" value="2" />
                            <Tab label="Kandidat" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <MainTable users={users} />
                    </TabPanel>
                    <TabPanel value="2">
                        <RekapSuara
                            users={users.filter(
                                (item) => item.pemilihan !== null
                            )}
                        />
                    </TabPanel>
                    <TabPanel value="3">
                        <Kandidat candidate={candidate} />
                    </TabPanel>
                </TabContext>
            </div>
            <ToastContainer />
        </Authenticated>
    );
}
