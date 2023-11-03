import React, { useState } from 'react'
import Header from '../Component/Header'
import SideBar from '../Component/SideBar'

const Main = () => {
  const [openDrawer, setopenDrawer] = useState(false)
const toggle=()=>{
  setopenDrawer(!openDrawer)
}
  return (
    <div>
      <Header toggle={toggle} />
      <SideBar openDrawer={openDrawer} />
      <div>Display mails</div>
    </div>
  )
}

export default Main