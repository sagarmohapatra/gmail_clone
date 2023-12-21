// import Main from "../Page/Main"
// import Emails from "../Component/Emails"

import { lazy } from "react"
const Main = lazy(() => import("../Page/Main"))
const Emails = lazy(() => import("../Component/Emails"))
const ViewEmail=lazy(()=>import("../Component/ViewEmail"))

const route = {
    main: {
        path: "/",
        element: Main
    },
    emails: {
        path: "/emails",
        element: Emails

    },
    view: {
        path: "/view",
        element: ViewEmail  
    },
    invalid: {
        path: "/*",
        element: Emails
    }
    
}
export { route }