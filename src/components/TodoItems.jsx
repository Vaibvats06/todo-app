import React from 'react'
import Item from './Item'

const TodoItems = ({items,deleteButton}) => {
    
  return (
    <>
    <div className='flex flex-col gap-4'>
        {items.map((item, index)=>{
            return(
            <Item key={index} todo={item.name} date={item.date} deleteButton={deleteButton} />)
        })}
      
    </div>
    </>
  )
}

export default TodoItems