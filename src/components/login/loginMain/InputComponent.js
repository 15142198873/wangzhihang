import React from 'react'

export default function InputComponent({content,place,type}) {
  return (
    <div>
        <div>
        <p className='input-title'>{content}</p>
         <input placeholder={place} className='input-component' type={type}></input> 
        </div>
    </div>
  )
}
