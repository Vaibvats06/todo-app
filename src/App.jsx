import React, { useState } from 'react'
import { useRef } from 'react';
import Item from './components/Item'

const App = () => {
  let [newdata, setNewdata]=useState();
  const todoref=useRef();
  const dateref=useRef();
  const AddData=(todo,date)=>(
    {
      todo:todo.current.value,
      datetodo:date.current.value
    }

  )
  


 

  return (
    <div className='px-[2vh] sm:px-[7vh] md:px-[9vh] lg:px-[11vh] py-5 app'>
    <div className='flex flex-col gap-10 justify-center items-center border rounded bg-gray-50 py-8'>
      <h1 className='text-center font-bold text-4xl'>Todo App</h1>
      <div className='flex gap-5'>
        <input ref={todoref} className='border-black outline-1 text-md py-3 px-2 rounded-sm w-70 shadow-b-xs' type="text" placeholder='Enter Todo Here'/>
        <input ref={dateref} className='border-black outline-1 text-md py-3  px-20 rounded-sm w-70 shadow-b-xs' type="date" name="" id="" />
        <button onClick={() => {
              setNewdata(AddData(todoref,dateref));
              console.log(newdata.todoref)

            }} className='w-25 py-3 rounded-xl cursor-pointer bg-green-600 text-white font-semibold hover:bg-green-700'>Add</button>
      </div>
      <Item />
    </div>
    </div>
  )
}

export default App