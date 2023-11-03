import React from 'react'
import { Box, Button, styled, List, ListItem, Container } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SIDEBAR_DATA from '../Config/sidebar.config';

const ComposeButton = styled(Button)({
    background: "#c2e7ff",
    color: "#001d35",
    padding: 16,
    borderRadius: 16,
    minWidth: 140,
    textTransform: "none"
})
const Containers=styled(Box)({
    padding:8,
    "& >ul":{
        padding:"10px 0 0 5px",
        fontSize:14,
        fontweight:500,
        cursor:"pointer"
    },
    "& >ul >li >svg":{
        marginRight:20,

    }
})
const SideBarContent = () => {
    return (
        <Containers>
           
                <ComposeButton>
                    <CreateOutlinedIcon />Compose
                </ComposeButton>
            
            <List>
                {
                    SIDEBAR_DATA.map(data => (
                        <ListItem>
                            <data.icon fontSize='small'/>{data.title}
                        </ListItem>
                    ))
                }
            </List>
        </Containers>
    )
}

export default SideBarContent