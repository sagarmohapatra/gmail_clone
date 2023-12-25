
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url"
import useApi from "../hooks/useApi"
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { Box, ListItem, List } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Padding } from "@mui/icons-material";
import Email from "./Email";
const Emails = () => {
    const [selectedEmail, setselectedEmail] = useState([])
    const [refereshScreen, setrefereshScreen] = useState(false)
    const { openDrawer } = useOutletContext();
    const { type } = useParams();

    const getEmailService = useApi(API_URLS.getEmailFromType)
    const moveEmailToService = useApi(API_URLS.moveEmailsToBin)
    useEffect(() => {
        getEmailService.call({}, type)
    }, [type, refereshScreen])



    const slectedAllEmail = (e) => {
        if (e.target.checked) {
            const emails = getEmailService?.response?.map(email => email._id);
            setselectedEmail(emails)
        } else {
            setselectedEmail([])
        }
        setrefereshScreen(!refereshScreen)
    }
    const deletedSelectedEmail = (e) => {
        if (type === "bin") {

        } else {
            moveEmailToService.call(selectedEmail)

        }
        setrefereshScreen(prevState => !prevState)
    }
    return (
        <div style={openDrawer ? { marginLeft: 250, width: "80%" } : { width: "100%" }}>
            <Box style={{ padding: "20px 10px 0 10px", display: "flex", alignItems: "center" }}>
                <Checkbox size="small" onChange={(e) => slectedAllEmail(e)} />
                <DeleteOutlineIcon onClick={(e) => deletedSelectedEmail(e)} />
            </Box>
            <List>

                {
                    getEmailService?.response?.map(email => (
                        <Email
                            key={email._id}
                            email={email}
                            selectedEmail={selectedEmail}
                        />
                    ))

                }
            </List>
        </div >
    )
}

export default Emails;