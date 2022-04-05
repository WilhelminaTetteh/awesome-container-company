import React from "react";

const chatHistory = [
  {
    content: "What do you do?",
    author: "customer",
    highlight: false
  },
  {
    content: "We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant",
    author: "acc",
    highlight: false
  },
  {
    content: "Awesome!",
    author: "customer",
    highlight: false
  },
  {
    content: "I want to work with you!",
    author: "customer",
    highlight: true
  },
  {
    content: "Cool! We operate in Singapore and are planning to open in Many onther countires soon!",
    author: "acc",
    highlight: false
  },
]

const Chat = () => {
  return (
    <section className="chat" id="chat">
      <img className="chat__avatar_customer" alt="black and white smiley" />
    </section>
  )
}

export default Chat;