import React from 'react';
import "./css/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className='header'>
    <div className='header_left'>
        <IconButton>
        <MenuIcon/>
        </IconButton>
        <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg" alt=""/>
    </div>
    <div className='header_middle'>
        <SearchIcon/>
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className='header_inputCaret'/>
    </div>
    <div className='header_right'>
         <IconButton>
            <AppsIcon/>
         </IconButton>
         <IconButton>
            <NotificationsIcon/>
         </IconButton>
         <Avatar/>
    </div>
    </div>
  )
}

export default Header