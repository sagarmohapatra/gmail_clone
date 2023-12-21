import React, { useState } from 'react'
import { Box, Button, styled, List, ListItem, Container } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SIDEBAR_DATA from '../Config/sidebar.config';
import ComposeMail from './ComposeMail'
import { NavLink, useParams } from 'react-router-dom';
import {route} from "../routes/route"
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
        cursor:"pointer",
        "& > a":{
            textDecoration:"none",
            color:"inherit"
        }
    },
    "& >ul >a >li >svg":{
        marginRight:20,

    }
})
const SideBarContent = () => {
    const {type}=useParams();
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
                        <NavLink key={data.name} to={`${route.emails.path}/${data.name}`}>
                        <ListItem style={type===data.name.toLocaleLowerCase() ? {
                            backgroundColor:"#d3e3fd",
                            borderRadius:"0 16px 16px 0"
                        }:{}}>
                            <data.icon fontSize='small'/>{data.title}
                        </ListItem>
                        </NavLink>
                    ))  
                }
            </List>
            <ComposeMail openDilaog={openDilaog} setopenDilaog={setopenDilaog}/>
        </Containers>
    )
}

export default SideBarContent