import React, { useEffect, useState } from 'react'
import './style/Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MicIcon from '@material-ui/icons/Mic'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

function Chat() {
      const [seed, setSeed] = useState("");

      useEffect(()=>{
            setSeed(Math.floor(Math.random() * 5000));
      }, []);

      const sendMessage = () => {
            
      }

      return (
            <div className="chat">
                  
                  <div className="chat__header">
                        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                        <div className="chat__headerInfo">
                              <h3>Room name</h3>
                              <p>Last seen at ...</p>
                        </div>

                        <div className="chat__headerRight">
                              <IconButton>
                                    <SearchOutlined />
                              </IconButton>

                              <IconButton>
                                    <AttachFile />
                              </IconButton>

                              <IconButton>
                                    <MoreVertIcon />
                              </IconButton>
                        </div>
                  </div>

                  <div className="chat__body">
                        <p className={`chat__message ${true && 'chat__reciever'}`}>
                              <span className="chat__messageName">
                                    Ondrej Brendzas
                              </span>

                              Hey guys

                              <span className="chat__messageTime">
                                    3:25pm
                              </span>
                        </p>
                  </div>

                  <div className="chat__footer">
                        <IconButton>
                              <InsertEmoticonIcon />
                        </IconButton>
                        <form>
                              <input 
                                    type="text"
                                    placeholder="Type of message"
                                    />
                              <button type="submit" onClick={sendMessage} >Send a message</button>
                        </form>
                        <IconButton>
                              <MicIcon />
                        </IconButton>
                  </div>
            </div>
      )
}

export default Chat
