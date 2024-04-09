import { Button } from "@mui/material";

export default function CustomButton({ text, cb, variant = "contained" }: any) {
    return <Button onClick={cb} variant="contained">
        {text}
    </Button>
}