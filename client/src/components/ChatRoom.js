import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPaperclip } from '@fortawesome/free-solid-svg-icons';function ChatRoom(){
    return(
        <div className="chat">
            <div className="chat1">
                <div className="chatRoom">
                ChatRoom </div><FontAwesomeIcon icon={faCamera} /></div>
            <div className="room"></div>
            <div className="down">
                <div className="attach"><FontAwesomeIcon icon={faPaperclip} /></div>
                <input className="input"/>
            </div>
            
        </div>
)
}

export default ChatRoom
