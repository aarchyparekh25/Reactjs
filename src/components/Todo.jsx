import React,{ useRef ,useState,useEffect} from 'react'
import TodoItems from './TodoItems'
import { PiNotepadBold } from "react-icons/pi";



const Todo = () => {

  const[todoList , setTodoList] = useState(localStorage.getItem('todoList')?JSON.parse(localStorage.getItem('todoList')) :[]);

  const inputRef = useRef();
  
  const add = () =>{
    const inputText = inputRef.current.value.trim();

    if(inputText === ""){
      return null;

    }
    
    const newTodo = {
      id:Date.now(),
      text:inputText,
      isComplete:false,
    }
    setTodoList((prev)=> [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id)=>{
      setTodoList((prvTodos)=>{
        return prvTodos.filter((todo)=>todo.id!==  id)
      })
  }

  const toggle = (id)=>{
    setTodoList((prevTodos)=>{
          return prevTodos.map((todo)=>{
            if(todo.id === id){
              return{...todo, isComplete: !todo.isComplete }
              
            }
            return todo;
            
          })
        })

  }

  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(todoList))
  },[todoList])
  
  return (
    <div className='bg-[#cce3de] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
       
    {/*--------title--------*/}

    <div className ='flex items-center justify-center mt-7 gap-2'>
    <PiNotepadBold size={45} />
          <h1 className='text-4xl text-blue-950 font-sans font-extrabold'>TO-DO LIST</h1>
    </div> 

    {/*--------input boxes--------*/}
    <div className='flex items-center justify-center my-7 bg-gray-300 border border-gray-500 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-600 font-medium' type="text" placeholder='Add your task!' />
        <button onClick={add} className='border-none rounded-full font-bold bg-[#174158] w-32 h-14 text-white text-sm cursor-pointer'>ADD TO-DO</button>
    </div>

    {/*--------TO-DO List--------*/}

    <div>

      {todoList.map((item ,index)=>{
        return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo ={deleteTodo} toggle={toggle}/>

      })}

   </div>
    
    </div>

  )
}








export default Todo