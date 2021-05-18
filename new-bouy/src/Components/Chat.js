import React from "react";
import Messages from "./Messages";
import Sidebar from "./Sidebar";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <Sidebar/>
      <Messages/>
    </div>
  );
}

export default Chat;
