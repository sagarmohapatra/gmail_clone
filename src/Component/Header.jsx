import React from 'react'
import { AppBar,Toolbar,styled,InputBase ,Box} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
// import  from '@mui/material';
import { gmailLogo } from '../constant/Constant';
const styledAppBar=styled(AppBar)({
    background:"#F5F5F5",
})
const SearchWrapper=styled(Box)({
    background:"#EAF1FB",
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:"center",
    justifyContent:"space-between",
    padding:"0 20px"
    
})

const Header = () => {
  return (
    <styledAppBar position='static'>
        <Toolbar>
            <MenuIcon color='action'/>
            <img src={gmailLogo} alt='logo' style={{width:110,marginLeft:"15px"}}/>
            <SearchWrapper >
                <SearchIcon />
                <InputBase />
                <TuneIcon />
            </SearchWrapper>
        </Toolbar>
    </styledAppBar>
  )
}

export default Header