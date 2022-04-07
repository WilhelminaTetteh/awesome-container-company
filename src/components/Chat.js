import React from "react";
import user from "../images/user.svg";
import acc from "../images/acc.svg";

const chatHistory = [
  {
    content: "What do you do?",
    bubble: "",
    text: ""
  },
  {
    content: "We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant",
    bubble: "chat__bubble_acc",
    text: "chat__message_highlight"
  },
  {
    content: "Awesome!",
    bubble: "",
    text: ""
  },
  {
    content: "I want to work with you!",
    bubble: "chat__bubble_highlight",
    text: "chat__message_highlight"
  },
  {
    content: "Cool! We operate in Singapore and are planning to open in Many onther countires soon!",
    bubble: "chat__bubble_acc",
    text: "chat__message_highlight"
  },
]

const Chat = () => {
  return (
    <section className="chat" id="chat">
      <img className="chat__avatar chat__avatar_customer" alt="black and white smiley" src={user} />
      <div className="chat__container">
        {chatHistory.map(({content, bubble, text}, i) => {
          return (
            <div key={i} className={`chat__bubble ${bubble}`}>
              <p className={`chat__message ${text}`}>{content}</p>
            </div>
          )
        })}
      </div>
      <img className="chat__avatar chat__avatar_acc" alt="container company smiley" src={acc} />
    </section>
  )
}

export default Chat;