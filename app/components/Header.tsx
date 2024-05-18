"use client"
import Image from "next/image";
import { useContext } from "react";
import { MessagesListContext } from "../contexts/MessageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const messagesContext = useContext(MessagesListContext)

    const clearHistory = () => {
      localStorage.removeItem('Messages')
      messagesContext.setUserMessages([])
    }

    return (
      <header className="top-0 w-full flex px-3 justify-between items-center">
        <Image src="/assets/logo.svg" alt="Monta AI" width={60} height={60} />
        
        {
          messagesContext.userMessages.length > 0 &&
            <div>
              <FontAwesomeIcon title="Clear History" icon={faTrash} onClick={() => clearHistory()} className='cursor-pointer' />
            </div>
        }

      </header>
    );
  }