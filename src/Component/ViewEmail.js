import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { useOutletContext, useLocation } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { emptyProfilePic } from '../constant/Constant';
import styled from '@emotion/styled';
const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state
  const IconeWrapper = styled(Box)({
    padding: 15
  })
  const Subject = styled(Typography)({
    fontSize: 22,
    margin: "10px 0 20px 75px",
    display: "flex"
  })
  const Indicator = styled(Box)({
    fontSize: 12,
    background: "#ddd",
    color: "#222",
    padding: "2px 4px",
    marginLeft: 6,
    borderRadius: 4,
    alignSelf: "center"
  })
  const Container = styled(Box)({
    marginLeft: 15,
    width: '100%',
    '& > div': {
      display: 'flex',
    }
  })
  const Wrapper = styled(Box)({
    display: "flex",
    "& >p >span": {
      fontSize: 12,
      color: "#5e5e"
    }
  })
  const Date = styled(Box)({
    margin: "0 50px 0 50px !important",

})
  return (
    <Box style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }}>
      <IconeWrapper>
        <ArrowBackIcon onClick={() => window.history.back()} color="action" fontSize='small' style={{ cursor: "pointer" }} />
        <DeleteIcon fontSize="small" color="action" style={{ marginLeft: 40 }} />
      </IconeWrapper>
      <Subject>
        {email.subject} <Indicator component="span">Inbox</Indicator>
      </Subject>
      <Container>
        <img src={emptyProfilePic} alt='dp' />
        <Box style={{width:"80%"}}>
          <Wrapper>
            <Typography>{email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Date>
              {(new window.Date(email.date)).getDate()}&nbsp;
              {(new window.Date(email.date)).toLocaleString("default", { month: "long" })}&nbsp;
              {(new window.Date(email.date).getFullYear())}
            </Date>
          </Wrapper>
        </Box>
      </Container>
    </Box>
  )
}

export default ViewEmail