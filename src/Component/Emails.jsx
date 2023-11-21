
import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url"
import useApi from "../hooks/useApi"
import { useEffect } from "react";
const Emails = () => {
    const { openDrawer } = useOutletContext();
    const { type } = useParams();

    const getEmailService = useApi(API_URLS.getEmailFromType)
    useEffect(() => {
        getEmailService.call({}, type)
    }, [type])

    return (
        <div style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }}> Emails </div >
    )
}

export default Emails;