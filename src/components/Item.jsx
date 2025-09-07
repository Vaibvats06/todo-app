import react from 'react'

const Item =({todo,date,deleteButton})=>{
    return(
        <div>
      <div className='flex gap-5'>
        <p className='border-black  text-md py-3 px-2 rounded-sm w-40 md:w-50 lg:w-70 shadow-b-xs' >{todo}</p>
        <p className='border-black  text-md py-3  px-20 rounded-sm w-40 md:w-50 lg:w-70' >{date}</p>
        <button onClick={()=>deleteButton(todo)}  className='w-20 md:w-25   py-3 rounded-xl cursor-pointer bg-red-600 text-white font-semibold hover:bg-red-700'>Delete</button>
      </div>
        </div>
    )
}

export default Item;