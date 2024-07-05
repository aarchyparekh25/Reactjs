import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const TodoItems = ({text ,id,isComplete,deleteTodo,toggle }) => {
  return (
    <div className='flex items-center justify-center my-3 rounded-lg gap-2 shadow-[-3px-3px-3px-#9e9e9e] transition-transform hover:scale-105 p-3 bg-[#ffffea] '>
        
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        {isComplete ? (
        <MdCheckBox className='w-7 h-7' style={{color:'#174158'}} />
      ) : (
        <MdCheckBoxOutlineBlank className='w-7 h-7 ' style={{color:'#174158'}}/>
      )}
                <p className={` text-blue-800  font-medium text-md ml-4 text-[17px] decoration-blue-800 ${isComplete ? "line-through" : ""}`}>{text}</p>

        </div>

        <div>
        <MdDelete onClick={()=>{deleteTodo(id)}} size={25} cursor-pointer style={{color:'#174158'}} />
        </div>

    </div>
  )
}

export default TodoItems