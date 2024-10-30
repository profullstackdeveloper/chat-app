import { IconButton, Typography } from "@mui/material";
import TocIcon from '@mui/icons-material/Toc';
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function AppHeader() {

    const { setExpandSidebar, expandSidebar } = useContext(AppContext)

    return (
        <div className="w-full bg-slate-900 h-[60px] text-white flex items-center justify-center relative">
            <Typography fontSize={'36px'} fontWeight={'bold'}>
                Chat App
            </Typography>
            <IconButton
                sx={{
                    position: 'absolute',
                    left: '4px'
                }}
                onClick={() => setExpandSidebar(!expandSidebar)}
            >
                <TocIcon
                    sx={{
                        fontSize: '40px',
                        cursor: 'pointer',
                        color: 'white'
                    }}
                />
            </IconButton>
        </div>
    )
}