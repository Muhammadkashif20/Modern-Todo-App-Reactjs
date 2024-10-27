import React, { useState } from 'react';

const TodoApp = () => {
  const [inputValue,setInputValue]=useState('')
  const [todo,addTodo]=useState([])
  const handleTodoValue=()=>{   
    if(inputValue.trim()==''){
      alert('Please Enter Your Input Value 🙄')
    }
    else{
      console.log(todo);
      addTodo([...todo,inputValue])
      setInputValue('')  
    }
  }
  const handleDeleteFunctionality=(id)=>{
    const removeTodoFromTodoList=todo.filter((text,index)=>index!==id)
    addTodo(removeTodoFromTodoList)
    console.log(removeTodoFromTodoList);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md" >
        <h1 className="text-3xl font-bold text-center text-gray-800">To-Do List 📃</h1>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Add a new task"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
           <button className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
           onClick={handleTodoValue}
           >
          Add
        </button>
        </div>
          {todo.map((userText,userId)=>{
            return(
                <ul className="mt-4 space-y-3" key={userId}>
                <li className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow">
                  <span className="text-gray-700"  >{userText}</span>
                  <button className="text-red-500 hover:text-red-700 text-[1.20rem]"
                  onClick={handleDeleteFunctionality}
                  >
                    &#10005;
                  </button>
                </li>
              </ul>
            )
              })}
     
      </div>
    </div>
  );
};

export default TodoApp;
