import React, { useState } from 'react'
import Header from '../Component/Header'
import SideBar from '../Component/SideBar'
import Emails from '../Component/Emails'

const Main = () => {
  const [openDrawer, setopenDrawer] = useState(false)
const toggle=()=>{
  setopenDrawer(!openDrawer)
}
  return (
    <div>
      <Header toggle={toggle} />
      <SideBar openDrawer={openDrawer} />
   <Emails  openDrawer={openDrawer}/>
    </div>
  )
}

export default Main