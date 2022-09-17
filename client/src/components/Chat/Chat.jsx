import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";
import './Chat.css'
import io from 'socket.io-client';
import {
  Dialog
} from '@mui/material';

const socket = io.connect('http://localhost:3001')

function Chat() {

  const [room, setRoom] = useState(1);

  const userDataInfo = useSelector((store) => store.auth.userData)

  console.log("user-data ===========", userDataInfo)

  const [userName, setUserName] = useState('Онлайн поддержка');

  const handleUserName = () =>{
    setUserName('Покупатель' + 1)
  }

  socket.emit("join_room", room)

  const userinfo = () =>{
    if(userDataInfo.login){
      return userDataInfo.login;
    } else{
       return 'Покупатель';
    }
  }

    
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
 
    if (currentMessage !== "") {
      
      const messageData = {
        room: room,
        author: userinfo(),
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData)
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
      <div className="chat-window">
      <div className="chat-header">
        <p>Онлайн поддержка</p>
        
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
              <div key={index}
                className="message"
                id={userDataInfo.login === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Введите сообщение..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}> Отправить </button>
      </div>
    </div>
  );
}

export default Chat;