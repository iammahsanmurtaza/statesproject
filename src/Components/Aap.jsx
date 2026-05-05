import Pad from './Pad.jsx'
import React from 'react'
import padsData from './pads'

export default function Aap () {
  const [pads, setPads] = React.useState(padsData)
  const buttonElements = pads.map(pad => (
    <Pad
      color={pad.color}
      key={pad.id}
      id={pad.id}
      on={pad.on}
      toggle={id => {
        setPads(
          pads.map(element =>
            element.id === id ? { ...element, on: !element.on } : element
          )
        )
      }}
    />
  ))

  return (
    <main>
      <div className='bg-black min-h-screen flex items-center justify-center'>
        <div className='grid grid-cols-4 gap-4'>{buttonElements}</div>
      </div>
    </main>
  )
}
