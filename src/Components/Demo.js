import React, { useMemo } from 'react'
import { useState } from 'react'
import { findPrime } from '../utils/helper'
const Demo = () => {
    
    const [text,setText]=React.useState(0)
    const [isDarkTheme,setIsDarkTheme]=useState(true)
    const prime=useMemo(()=> findPrime(text),[text])
    //memorize it and only change when text changes
  return (
    <div className={"m-4 p-2 w-96 h-96 border border-black " + (isDarkTheme ? " text-white bg-gray-900":"text-black")
    }
    >
        <div>
            <button className="m-10 p-2 bg-green-200"
            onClick={()=>{
                setIsDarkTheme(!isDarkTheme)
            }}
            >
                Toggle
            </button>
            <input
            className="border border-black w-72 px-2 text-black"
            type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div>
            <h1 className="font-bold text-xl mt-4">nth prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo