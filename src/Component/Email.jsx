import React from 'react'
import { Box, Typography, Checkbox, Hidden } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from '@emotion/styled';
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
    fontSize:12,
    color:"#5F6368"
})
const Email = ({ email,selectedEmail }) => {
    return (
        <Wrapper>
            <Checkbox size='small' 
                checked={selectedEmail.includes(email._id)}
            />
            <StarBorderIcon size='small' style={{ marginRight: 10 }} />
            <Box>
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