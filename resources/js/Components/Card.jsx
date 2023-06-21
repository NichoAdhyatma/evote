import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PrimaryButton from "./PrimaryButton";

export default function OutlinedCard({ title, content, onClick }) {
    return (
        <Card variant="outlined" className="p-4">
            <CardContent>
                <Typography variant="h5" color="text.primary" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions className="flex justify-end my-2">
                <PrimaryButton size="small" onClick={onClick}>
                    Mulai Pemilihan
                </PrimaryButton>
            </CardActions>
        </Card>
    );
}
