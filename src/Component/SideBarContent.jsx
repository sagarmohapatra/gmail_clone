import React, { useState } from 'react'
import { Box, Button, styled, List, ListItem, Container } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SIDEBAR_DATA from '../Config/sidebar.config';
import ComposeMail from './ComposeMail'

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
    const [openDilaog,setopenDilaog]=useState(false)
    const onComposeCliclick=()=>{
        setopenDilaog(true)
    }
    return (
        <Containers>
           
                <ComposeButton onClick={()=>onComposeCliclick()}>
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
            <ComposeMail openDilaog={openDilaog} setopenDilaog={setopenDilaog}/>
        </Containers>
    )
}

export default SideBarContent