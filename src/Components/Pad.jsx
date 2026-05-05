import { useState } from 'react'
export default function Pad (props) {
  return (
    <button
      onClick={() => props.toggle(props.id)}
      className='h-25 w-25 border-[3px] border-white rounded-[5px] cursor-pointer opacity-10'
      style={{
        backgroundColor: props.color,
        opacity: props.on ? 0.1 : 1
      }}
    />
  )
}
