import { Icon } from '@mui/material';
import React from 'react';
import "./css/SidebarOption.css"

function SidebarOption({Icon, title, number, selected}) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SidebarOption