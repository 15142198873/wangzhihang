import React from 'react'

export default function InputComponent({content,place,type}) {
  return (
    <div>
        <div>
        <p className='inputTitle'>{content}</p>
         <input placeholder={place} className='inputComponent' type={type}></input> 
        </div>
    </div>
  )
}
