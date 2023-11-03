import React from 'react'
import { Dialog } from '@mui/material'
const dialogStyle={
    height:"90%",
    width:"80%",
    maxHeight:"100%",
    maxWidth:"100%",
    boxShadow:"none",
    borderRadius:"10px 10px 0 0"

}
const ComposeMail = () => {
  return (
   <Dialog 
   open={true}
   PaperProps={{sx:dialogStyle}}// use for change size of dialog box
   >
    hello
   </Dialog>
  )
}

export default ComposeMail