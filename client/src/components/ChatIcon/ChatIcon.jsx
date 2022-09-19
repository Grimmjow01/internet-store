import React, {useState} from 'react'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Chat from '../Chat/Chat';
import './ChatIcon.css'
import {
     Dialog, Box
  } from '@mui/material';

const ChatIcon = () => {
    const [isActive, setActive] = useState(false);


    const toggleClass = () => {
        setActive(!isActive);
      };

    const [open, setOpen] = useState(false);

    const handClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      
  return (
    <>
    <ChatOutlinedIcon className="chat-icon" onClick={toggleClass}/>
      
     <Box aria-labelledby="form-dialog-title" className={isActive ? 'chat-box': 'chat-box-hidden'} >
           <Chat />
     </Box>
     </>
  )
}

export default ChatIcon