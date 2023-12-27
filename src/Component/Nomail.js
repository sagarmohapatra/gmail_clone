import React from 'react'
import { Box,Typography,Divider } from '@mui/material'
import styled from '@emotion/styled';
const Component=styled(Box)({
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    marginTop:"50",
    opacity:"0.8",
    width:"100%"

})
const StyleDivider=styled(Divider)({
    width:"100%",
    marginTop:10
})
const Nomail = ({message}) => {
    
  return (
    <Component>
        <Typography>{message.heading}</Typography>
        <Typography>{message.subHeading}</Typography>
        <StyleDivider/>
           </Component>
  )
}

export default Nomail