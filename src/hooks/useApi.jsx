import API from "../services/api"
import { useState } from "react";
const useApi = (urlObject) => {
    const [response, setresponse] = useState()
    const [error, seterror] = useState()
    const [isLoading, setisLoading] = useState(false)
    const call = async (payload) => {
        setresponse(null)
        seterror("")
        setisLoading(true)
        try {
            let res = await API(urlObject,payload);
            setresponse(res.data)
        } catch (error) {
            seterror(error.message)
        } finally {
            setisLoading(false)
        }
    }
    return { call, response, error, isLoading };
}
export default useApi;