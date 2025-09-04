import React, { useState } from 'react'
import TodoItems from './components/TodoItems';
import styles from './App.module.css'

const App = () => {
  const [inputValue,setInputValue]=useState("");
  const [inputDate,setInputDate]=useState("");
  const SearchItem=(Event)=>{
     setInputValue(Event.target.value)
  }
  const Date=(event)=>{
    const newdate=event.target.value
    setInputDate(newdate)
    }


  const AddItem=()=>{
    let additem={name:inputValue,date:inputDate}
    setTodoData([...TodoData,additem])
    

  }
  
  const [TodoData,setTodoData] = useState([
    {
      name: "Go to School",
      date: "24/07/2025"
    },
    {
      name: "Eat Samosa",
      date: "24/07/2025"
    },
    {
      name: "Learn React",
      date: "03/08/2025"
    },
    {
      name:"Watch movie after react",
      date:"05/08/2025"
    }
  ])


  return (
    <div className='px-[2vh] sm:px-[7vh] md:px-[9vh] lg:px-[11vh] py-5 app'>
    <div className='flex flex-col gap-5 justify-center items-center border rounded bg-gray-50 py-8'>
      <h1 className={`${styles.toHi} text-center font-bold toHi text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>Todo App</h1>
      <div className='flex gap-5'>
        <input onChange={SearchItem}className='border-black outline-1 text-md py-3 px-2 rounded-sm w-40 md:w-50 lg:w-70 shadow-b-xs' type="text" placeholder='Enter Todo Here'/>
        <input onChange={Date} className='border-black outline-1 text-md py-3  px-20 rounded-sm w-40 md:w-50 lg:w-70 shadow-b-xs' type="date" name="" id="" />
        <button onClick={AddItem} className='w-20 md:w-25  py-3 rounded-xl cursor-pointer bg-green-600 text-white font-semibold hover:bg-green-700'>Add</button>
      </div>
      <TodoItems items={TodoData}/>
    
   

    </div>
    </div>
  )
}
export default App