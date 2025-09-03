import react from 'react'

const Item =()=>{
    return(
        <div>
      <div className='flex gap-5'>
        <p className='border-black  text-md py-3 px-2 rounded-sm w-70 shadow-b-xs' >Buy Milk</p>
        <p className='border-black  text-md py-3  px-20 rounded-sm w-70' >04/07/2025</p>
        <button onClick={screen} className='w-25 py-3 rounded-xl cursor-pointer bg-red-600 text-white font-semibold hover:bg-red-700'>Delete</button>
      </div>
        </div>
    )
}

export default Item;