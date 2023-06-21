import { LoadingButton } from "@mui/lab";

export default function PrimaryButton({
    className = "",
    disabled,
    type = "button",
    children,
    ...props
}) {
    return (
        <LoadingButton
            type={type}
            {...props}
            className={className}
            disabled={disabled}
            variant="contained"
            size="small"
        >
            <div className="font-semibold">{children}</div>
        </LoadingButton>
    );
}
