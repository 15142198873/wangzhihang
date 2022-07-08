import React from 'react'

export default function multipleButton({content,onClick}) {
  return (
    <div>
        <button className='multiple-button' onClick={onClick}>{content}</button>
    </div>
  )
}
