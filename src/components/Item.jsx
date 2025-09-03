import react from 'react'

const Item =({todo,date,btn})=>{
    return(
        <div>
      <div className='flex gap-5'>
        <p className='border-black  text-md py-3 px-2 rounded-sm w-40 md:w-50 lg:w-70 shadow-b-xs' >{todo}</p>
        <p className='border-black  text-md py-3  px-20 rounded-sm w-40 md:w-50 lg:w-70' >{date}</p>
        {btn=="Delete"||btn=="Add"?<button  className='w-20 md:w-25   py-3 rounded-xl cursor-pointer bg-red-600 text-white font-semibold hover:bg-red-700'>{btn}</button>:<p></p>}
      </div>
        </div>
    )
}

export default Item;