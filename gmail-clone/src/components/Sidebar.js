import { Button, IconButton } from '@mui/material';
import React from 'react';
import "./css/Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from './SidebarOption';
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from "@mui/icons-material/Label";
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';


function Sidebar() {
  return (
    <div className='sidebar'>
        <Button
        startIcon={<AddIcon fontSize='large'/>}
        className="sidebar_compose">
        Compose
        </Button>
        <SidebarOption  Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
        <SidebarOption  Icon={StarIcon} title="Starred" number={54}/>
        <SidebarOption  Icon={AccessTimeIcon} title="Snoozed" number={54}/>
        <SidebarOption  Icon={LabelImportantIcon} title="Important" number={54}/>
        <SidebarOption  Icon={NearMeIcon} title="Sent" number={54}/>
        <SidebarOption  Icon={NoteIcon} title="Drafts" number={54}/>
        <SidebarOption  Icon={ExpandMoreIcon} title="More" number={54}/>
        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
            <IconButton>
              <PersonIcon/>
            </IconButton>
            <IconButton>
              <DuoIcon/>
            </IconButton>
            <IconButton>
              <PhoneIcon/>
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
