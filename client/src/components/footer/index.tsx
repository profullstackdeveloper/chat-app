import { Avatar, IconButton, TextField } from "@mui/material";

export default function Footer() {
    return (
        <div className="w-full h-full box-border p-3 flex items-center">
            <IconButton
                sx={{
                    flexShrink: 0,
                    flexGrow: 0
                }}
            >
                <Avatar />
            </IconButton>
            <TextField
                id="outlined-multiline-flexible"
                label=""
                multiline
                maxRows={4}
                sx={{
                    flexShrink: 1,
                    flexGrow: 1
                }}
            />
        </div>
    )
}