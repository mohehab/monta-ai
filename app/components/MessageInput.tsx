"use client"
import { useState, useContext } from "react";
import { MessagesListContext } from "../contexts/MessageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function MessageInput() {
    const [text, setText] = useState('')
    const messagesListContext = useContext(MessagesListContext)

    const handleSendMessage = (e: KeyboardEvent) => {
      if (text && e.key === 'Enter' || text && e.type === 'click') {
        messagesListContext.setUserMessages([...messagesListContext.userMessages, text])
        localStorage.setItem('Messages', JSON.stringify([...messagesListContext.userMessages, text]))
        setText('')
      }
    }
    
    return (
      <div className="bottom-0 relative my-2.5 w-full px-5 sm:px-24 lg:px-52">
        <div className="relative">
          <textarea className="w-full text-sm rounded-xl p-3.5 border-indigo-monta border" name="Message" placeholder="Message" rows={1} value={text} onChange={(e) => setText(e.target.value)} onKeyUp={(e) => handleSendMessage(e)}></textarea>
          <div className="absolute cursor-pointer text-xl top-3.5 right-8">
            <FontAwesomeIcon title="Send" icon={faPaperPlane} onClick={(e) => handleSendMessage(e)} />
          </div>
        </div>
      </div>
    );
  }