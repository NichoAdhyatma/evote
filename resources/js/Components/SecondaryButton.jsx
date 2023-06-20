import { LoadingButton } from "@mui/lab";

export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <LoadingButton
            {...props}
            type={type}
            className={className}
            disabled={disabled}
            variant="outlined"
            size="small"
        >
            <div className="font-semibold">{children}</div>
        </LoadingButton>
    );
}
