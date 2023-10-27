import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  
  const [searchQuery,setSearchQuery]=useState("")
  const [suggestions,setSuggestions]=useState([])
  const [showSuggestions,setShowSuggestions]=useState(false)
  const searchCache=useSelector((state)=>state.search)
  
  useEffect(() => {
    //make an API call after every key press
    //but if the difference betweens 2API calls is less than 200ms
    //decline the API call
    const getSearchSuggestions=async()=>{
      const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
      const json=await data.json();
      setSuggestions(json[1])
      // console.log(json[1])
      dispatch(cacheResults({
        [searchQuery]:json[1]//cathcing in the search component
      }))
    }
    const timer=setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
        
      }
      else{
        getSearchSuggestions()
      }
     
    }, 200);
    return ()=>{
      //this function will be called when the compoenent is unmounted or component is re-rendered
      clearTimeout(timer);
      //implemented debouncing here
      //for every api call setTimout is called //before if we press next button before 200ms it will destroy the component and clearTimeout will also be called 
    }
  }, [searchQuery])
  
    const dispatch = useDispatch()
    const toggleMEnuHandler = () => {
        dispatch(toggleMenu())
    }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">

        
        <img 
        onClick={() => toggleMEnuHandler()}
        className="h-10 cursor-pointer"
        src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg" alt="" />
        <a href="/">
        <img 
        className="h-12 mx-2"
        src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="Youtube logo" />
        </a>
        </div>
        
        <div className="col-span-10  px-10">
          <div>
        <input type="text" className="w-1/2 border-gray-400 p-2  rounded-l-full border-2"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-2 py-2 rounded-r-full bg-gray-100">🔍</button>
        </div>
       {showSuggestions && <div className="fixed bg-white py-2 px-5 w-[37rem]">
          <ul>
            {suggestions.map((s)=>{
             return <li key={s} className="shadow-sm py-2 hover:bg-gray-100">⏳️{s}</li>
            })}

            
          </ul>
        </div>}
        </div>
        <div className="flex col-span-1">
            <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png" alt="" />

        </div>
    </div>
  )
}

export default Head