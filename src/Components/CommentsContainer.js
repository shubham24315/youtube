import React from 'react'
const commentsData=[
    {
        name:"Shubham",
        text: "Lorem ispum dolrosit",
        replies:[

        ]
    },
    {
        name:"Shubham",
        text: "Lorem ispum dolrosit",
        replies:[

        ]
    },
    {
        name:"Shubham",
        text: "Lorem ispum dolrosit",
        replies:[
            {
                name:"Shubham",
                text: "Lorem ispum dolrosit",
                replies:[
                ]
            },
            {
                name:"Shubham",
                text: "Lorem ispum dolrosit",
                replies:[    {
        name:"Shubham",
        text: "Lorem ispum dolrosit",
        replies:[
        ]
    },
                ]
            }
        ]
    }
]

const Comment = ({data})=>{
    const {name,text,replies}=data;
  return (<div className="flex shadow-sm bg-gray-100 p-2 my-2">
    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="profile" className="rounded-full w-10 h-10"/>
    <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p> 
    </div>
  </div>)
}
const CommentsList = ({comments})=>{
    //don't use indexes as keys in general
    return comments?.map((comment,index)=>( 
    <div>
    <Comment key={index} data={comment}/>
     <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment?.replies}/>   
          {/* we have used recursion here for n level nesting  */}
     </div>
    </div>
    
    ))
   
}
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="font-bold text-2xl">Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}


export default CommentsContainer