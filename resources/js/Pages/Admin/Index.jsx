import * as React from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import MainTable from "./MainTable";
import { Head, useForm } from "@inertiajs/react";
import RekapSuara from "./RekapSuara";

export default function LabTabs({ auth, users }) {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                </TabContext>
            </div>
        </Authenticated>
    );
}
