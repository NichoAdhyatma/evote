import { LoadingButton } from "@mui/lab";

export default function DangerButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <LoadingButton
            variant="contained"
            color="error"
            {...props}
            className={className}
            disabled={disabled}
            size="small"
        >
            <div className="font-semibold">{children}</div>
        </LoadingButton>
    );
}
