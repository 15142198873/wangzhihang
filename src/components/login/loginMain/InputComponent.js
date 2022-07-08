import React from 'react'

export default function InputComponent({content,place,type,value,email,password}) {
  return (
    <div>
        <div>
        <p className='input-title'>{content}</p>
         <input placeholder={place} className='input-component' type={type} onChange={email||password} ></input> 
        </div>
    </div>
  )
}
