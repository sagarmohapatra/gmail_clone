import React from 'react'
import { Drawer, styled } from '@mui/material'
import SideBarContent from './SideBarContent'
const SideBar = ({openDrawer}) => {
    return (
        <Drawer anchor='left'
            open={openDrawer}
            hideBackdrop={true}///hide the back color 
            ModalProps={{
                keepMounted:true
            }}
            variant='persistent' 
            sx={{
            "& .MuiDrawer-paper ":{
                marginTop:"62px",
                width:250,
                background:"#F5F5F5",
                borderRight:"none"
            }
            }}
            >
           <SideBarContent/>

        </Drawer>
    )
}

export default SideBar