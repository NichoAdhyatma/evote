import { FormControl, Input, InputLabel } from "@mui/material";
import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        className = "",
        label = "TextField",
        isFocused = false,
        type = "",
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <FormControl variant="standard" fullWidth margin="dense" size="small">
            <InputLabel htmlFor={props.id}>{label}</InputLabel>
            <Input {...props} type={type} className={className} ref={input} />
        </FormControl>
    );
});
