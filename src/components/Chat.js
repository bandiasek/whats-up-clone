import React, { useEffect, useState } from 'react'
import './style/Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'

function Chat() {
      const [seed, setSeed] = useState("");

      useEffect(()=>{
            setSeed(Math.floor(Math.random() * 5000));
      }, []);

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
                        
                  </div>

                  <div className="chat__footer">

                  </div>
            </div>
      )
}

export default Chat
