import { Checkbox } from "@mui/material";

export default function CustomCheckbox({ className = "", ...props }) {
    return <Checkbox {...props} type="checkbox" className={className} />;
}
