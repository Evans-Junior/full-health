import React from 'react';
import "./Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {

const handleChat = (e) =>{
    e.preventDefault();
}

    return (
        <div className="chat">
           <div className="chat__header">
               <Avatar/>
               <div className="chat__headerInfo">
                   <h3>Dr. Jesse</h3>
                   <p>Last seen at ...</p>
                   </div>
                    
                   <div className="chat__headerRight">
                   <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                   </div>
               
           </div>
           <div className="chat__body">
                        <p className="chat__message">
                            <span className="chat__name">Dr. Jesse</span>
                            This is a message
                            <span className="chat__timestamp">{new Date().toUTCString()}
                            </span>
                        </p>
                        <p className="chat__message chat__reciever">
                            <span className="chat__name">You</span>
                            This is a message
                            <span className="chat__timestamp">{new Date().toUTCString()}
                            </span>
                        </p>
                        <p className="chat__message">
                            <span className="chat__name">Dr. Jesse</span>
                            This is a message
                            <span className="chat__timestamp">{new Date().toUTCString()}
                            </span>
                        </p>
                    </div>
                    <div className="chat__footer">
                            <IconButton><InsertEmoticonIcon/></IconButton>
                            <form onClick={handleChat}>
                                <input placeholder="Type of message"
                                type="text"/>
                                <button type="summit">Send message</button>
                            </form>
                            <IconButton><MicIcon/></IconButton>
                        </div>
        </div>
    )
}

export default Chat;
