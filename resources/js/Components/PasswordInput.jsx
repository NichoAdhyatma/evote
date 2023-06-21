import {
    InputAdornment,
    IconButton,
    Input,
    InputLabel,
    FormControl,
} from "@mui/material";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default forwardRef(function PasswordInput(
    { className = "", label = "TextField", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    const [show, setShow] = useState(false);

    const handleClickShowPassword = () => setShow((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <FormControl variant="standard" fullWidth margin="dense" size="small">
            <InputLabel htmlFor={props.id}>{label}</InputLabel>
            <Input
                {...props}
                label={label}
                type={show ? "text" : "password"}
                className={className}
                ref={input}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
});
