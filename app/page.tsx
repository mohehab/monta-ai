"use client"
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { MessagesListContext } from "./contexts/MessageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const messagesListContext = useContext(MessagesListContext)

  const currentList = useRef(messagesListContext.userMessages)

  return (
    <section className="grow mx-4 sm:mx-20 lg:mx-36 mt-12">
      {
        messagesListContext.userMessages.length > 0 ?
        messagesListContext.userMessages.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-baseline mb-3">
                <FontAwesomeIcon icon={faUser} className="top-1.5 relative text-indigo-monta p-1 rounded-full border-indigo-monta border" />
                <div className="flex flex-col ml-3">
                  <h2 className="text-lg font-bold">You</h2>
                  <p className="grow text-sm">{item}</p>
                </div>
              </div>
              <div className="flex mb-3 items-baseline">
                <Image src="/assets/symbol.png" alt="Monta AI" width={25} height={25} className="top-1.5 relative" />
                <div className="flex flex-col ml-3">
                  <h2 className="text-lg font-bold">Monta AI</h2>
                  <p className={"grow text-sm relative " + (index + 1 === messagesListContext.userMessages.length && "before:absolute before:inset-0 before:animate-typewriter before:bg-white")}>{item}</p>
                </div>
              </div>
            </div>
          )
        }) :
        <div className="flex flex-col items-center">
          <Image src="/assets/symbol.png" alt="Monta AI" width={130} height={130} />
          <h2 className="text-2xl md:text-4xl font-bold mt-5">How can I help you today ?</h2>
        </div>
      }
    </section>
  );
}
