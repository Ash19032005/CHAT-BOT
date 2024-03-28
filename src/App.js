
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import React, { useState, useContext,useEffect } from 'react';
import { Context } from './context/context.jsx';


function App() {
  const {sent,setRecentInput,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  const [newChat,setNewChat]=useState(true);
  useEffect(()=>{
    // console.log(newChat);
    console.log(input);
},[input]);
  return (
    <div className="App">
      {/* side-bar */} 
       <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt="Logo" className='logo'/><span className='brand'>CHAT BOT</span></div>
          <button className="midBtn" onClick={()=>{setNewChat(true)}}><img src={addBtn} alt="" className="addBtn"/>New Chat</button>
          <div className="upperSideBottom">
            <button className="query" onClick={() => { setInput('What is Programming ?');}}><img src={msgIcon} alt=''/>What is Programming ?</button>
            <button className='query' onClick={()=>{setInput("How to use an API ?");}}><img src={msgIcon} alt=''/>How to use an API ?</button>
          </div>
        </div>
          <div className='lowerSide'>
            <div className='listItems'><img src={home} alt='home' className='listItemsImg'/>Home</div>
            <div className='listItems'><img src={saved} alt='saved' className='listItemsImg'/> Saved</div>
            <div className='listItems'><img src={rocket} alt='rocket' className='listItemsImg'/>Upgrade</div>
          </div>
       </div>
       {/* main */}
       <div className='main'>
        {((showResult) &&(!newChat)) ?(<div className="chats">
          <div className="chat bot1">
            <img className='chatImg' src={userIcon} alt=''/>
            <p className='txt'>{recentPrompt}</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt=''/>
            {loading ? <div className='loader'>
              <hr/>
              <hr/>
              <hr/>
            </div>:<p>{resultData}</p>
            } 
          </div>
        </div>):(
          <div className='home'>
          <div className='centerImg'><img src={gptLogo} alt="Logo" className='logo'/></div>
          <div className='Start-text'>
              <h1>Hello, Friends</h1>
              <br></br>
              <h2>How can I help You ??</h2>
             </div>
          </div>
          
        )}
        
          <div className="chatFooter">
            <div className="inp">
              <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}  placeholder="Send a message" id=""/>
              <button onClick={()=>{sent();setNewChat(false)}} className='send'><img src={sendBtn} alt='send'/></button>
            </div>
          </div>
          <p className='lastP'>ChatGPT may produce inaccurate information people,places, or facts.ChatGPT August 20 Version</p>
       </div>
       </div> 
  );
}
export default App;
