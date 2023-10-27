import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRadomName, makeRandomMessage } from '../utils/helper';
import { useState } from 'react';
const LiveChat = () => {
  const [LiveMessage,setLiveMessage]=useState([])
  const dispatch=useDispatch();
  const chatMessages=useSelector((store)=>store.chat.messages)
  useEffect(() => {
    const i=  setInterval(() => {
          // console.log("API POlling")
          dispatch(addMessage({
            name:generateRadomName(),
            message:makeRandomMessage(20)
          }))
      }, 2000)

     return () => clearInterval(i)
     
  }, [])
  return (
    <>
    <div className="w-full h-[600px] p-2 ml-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
      <div>
       {chatMessages?.map((c,index)=>(
          <ChatMessage key={index} name={c.name} message={c.message}/>
        ))
       }
       </div>
    </div>
    <form className="w-full p-2 ml-2 border border-black flex" onSubmit={(e)=>{
      e.preventDefault()
      dispatch(addMessage({
        name:"Shubham",
        message:LiveMessage
      }))
      setLiveMessage("")
      }}
      >
        <input className="w-96 border border-black" type="text" value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
       </form>
       
    </>
  )
}

export default LiveChat