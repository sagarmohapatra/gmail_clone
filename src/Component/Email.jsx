import React from 'react'
import { Box, Typography, Checkbox, Hidden } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Star } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { route } from "../routes/route"
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';
const Wrapper = styled(Box)({
    padding: "0 0 0 10px",
    background: "#f2f6fc",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&>div": {
        display: "flex",
        width: "100%",
        "& >p": {
            fontSize: 14
        }
    }
})
const Indicator = styled(Typography)({
    fontSize: "12px !important",
    background: "#ddd",
    color: "#222",
    padding: "0 4px",
    borderRadius: 4,
    marginRight: 6,

})
const Date = styled(Typography)({
    marginLeft: "auto",
    marginRight: 20,
    fontSize: 12,
    color: "#5F6368"
})
const Email = ({ email, selectedEmail,setrefereshScreen,setselectedEmail  }) => {
    const navigate = useNavigate()

    const toggleStarredService = useApi(API_URLS.toggleStarredEmail)
    const toggleStarredMails = () => {
        toggleStarredService.call({ id: email._id, value: !email.starred })
        setrefereshScreen(prevState => !prevState)
    }
    const onValueChange=()=>{
        if(selectedEmail.includes(email._id)){
            setselectedEmail(prevState=>prevState.filter(id=>id!=email._id))
        }else{
            setselectedEmail(prevState=>[...prevState,email._id])
        }
    }
    return (
        <Wrapper>
            <Checkbox size='small'
                checked={selectedEmail.includes(email._id)}
                onChange={()=>onValueChange()}
            />
            {
                email.starred ?
                    <Star fontSize="small" style={{ marginRight: 10,color:"#fff200" }} onClick={() => toggleStarredMails()} />
                    : <StarBorderIcon size='small' style={{ marginRight: 10 }} onClick={() => toggleStarredMails()} />
            }

            <Box onClick={() => navigate(route.view.path, { state: { email: email } })}>
                <Typography style={{ width: 200, overflow: "hidden" }}>{email.name}</Typography>
                <Indicator>inbox</Indicator>
                <Typography>{email.subject} {email.body && "-"} {email.body}</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}
                    {(new window.Date(email.date)).toLocaleString("default", { month: "long" })}
                </Date>
            </Box>
        </Wrapper>
    )
}

export default Email