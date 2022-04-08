import React from "react";
import { chatHistory } from "../constants/constants";
import user from "../images/user.svg";
import acc from "../images/acc.svg";

const Chat = () => {
  return (
    <article className="chat" id="chat">
      <div className="chat__container">
        <img className="chat__avatar chat__avatar_customer" alt="black and white smiley" src={user} />
        {chatHistory.map(({content, bubble, text}, i) => {
          return (
            <div key={i} className={`chat__bubble ${bubble}`}>
              <p className={`chat__message ${text}`}>{content}</p>
            </div>
          )
        })}
        <img className="chat__avatar chat__avatar_acc" alt="container company smiley" src={acc} />
      </div>
    </article>
  )
}

export default Chat;