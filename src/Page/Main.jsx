import React, { Suspense, useState } from 'react'
import Header from '../Component/Header'
import SideBar from '../Component/SideBar'
import Emails from '../Component/Emails'
import { Outlet } from "react-router-dom"
import SuspenseLoader from '../common/SuspenseLoader'
import { Box } from '@mui/material'
// import { Mail } from '@mui/icons-material'


const Main = () => {
  const [openDrawer, setopenDrawer] = useState(false)
  const toggle = () => {
    setopenDrawer(!openDrawer)
  }
  return (
    <>
      <Header toggle={toggle} />
      <Box>
        <SideBar openDrawer={openDrawer} />
        {/* <Emails openDrawer={openDrawer} /> */}
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{openDrawer}} />
        
        </Suspense>
      </Box>
    </>
  )
}

export default Main