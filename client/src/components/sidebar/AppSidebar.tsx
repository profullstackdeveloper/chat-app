import Avatar from '@mui/material/Avatar';
import { testUsers } from '../../utils/constants';
import { IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function AppSidebar() {

    const { expandSidebar } = useContext(AppContext);

    return (
        <div className={"p-[10px] h-full bg-slate-800 flex flex-col gap-2 transition-all " + (expandSidebar ? 'w-[200px]' : 'w-fit')}>
            <IconButton
                sx={{
                    padding: '0px !important',
                    justifyContent: 'left',
                    gap: '8px'
                }}
            >
                <Avatar />
                {
                    expandSidebar && <Typography fontSize={'14px'} fontWeight={'700'} color='white'>Test User</Typography>
                }
            </IconButton>
            {
                testUsers.length > 0 && testUsers.map((user, index) => {
                    return (
                        <IconButton
                            key={index}
                            sx={{
                                padding: '0px !important',
                                justifyContent: 'left',
                                gap: '8px'
                            }}
                        >
                            <Avatar />
                            {
                                expandSidebar && <Typography fontSize={'14px'} fontWeight={'700'} color='white'>{user.name}</Typography>
                            }
                        </IconButton>
                    )
                })
            }
        </div>
    )
}