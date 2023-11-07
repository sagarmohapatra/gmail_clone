import React, { useState } from 'react'
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const dialogStyle = {
    height: "90%",
    width: "80%",
    maxHeight: "100%",
    maxWidth: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0"

}
const Header = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f2f6fc",
    "& >p": {
        fontSize: 14,
        fontWeight: 500,
    }

})

const RecipientWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "0 15px",
    "& >div": {
        fontSize: 14,
        borderBottom: "1px solid #f5f5f5",
        marginTop: 10
    }
})
const Footer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    alignItems: "center",
    margin: "20"
})

const SendButton = styled(Button)({
    background: "#0B57D0",
    color: "#fff",
    fontWeight: 500,
    textTransform: "none",//it is use convert the uppercase to lowercase
    borderRadius: 18,
    width: 100
})
const ComposeMail = ({ openDilaog, setopenDilaog }) => {

    const config =
    {
        Host: "smtp.elasticemail.com",
        Username: "codesagar5@yopmail.com",
        Password: "768C9712C9DFFE99BD62A776147E67A4794A",
        port: 2525,

    }

    const[data,setdata]=useState({
        to:"",
        subject:"",
        body:""

    })

    const onValueChange=(e)=>{
        // console.log("fghj",e);
       const copyData={...data}
       copyData[e.target.name]=e.target.value
       setdata(copyData)
       console.log(data);

    }
    



    const closeCompose = (e) => {
        e.preventDefault()
        setopenDilaog(false)

    }

    const sendMail = (e) => {
        e.preventDefault()
        if (window.Email) {
            window.Email.send({
                ...config,
                To:data.to,
                From:"draupadimohapatra44@gmail.com",
                Subject: data.subject,
                Body: data.body 
            }).then(
                message => alert(message)
            );
        }
        setopenDilaog(false)
    }
    const sendDelete = () => {

        setopenDilaog(false)
    }
    
    return (
        <Dialog
            open={openDilaog}
            PaperProps={{ sx: dialogStyle }}// use for change size of dialog box
        >
            <Header>
                <Typography>New Message</Typography>
                <CloseIcon fontSize='small ' style={{ cursor: "pointer" }} onClick={(e) => closeCompose(e)} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='To' name='to' onChange={(e)=>onValueChange(e)} />
                <InputBase placeholder='subject' name='subject' onChange={(e)=>onValueChange(e)} />
            </RecipientWrapper>
            <TextField
                multiline
                rows={12}
                sx={{ "& .l51cta-MuiFormControl-root-MuiTextField": { border: "none" } }} /////////////////////
                name='body'
                onChange={(e)=>onValueChange(e)} 
            />
            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutlineOutlinedIcon onClick={() => sendDelete()} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail