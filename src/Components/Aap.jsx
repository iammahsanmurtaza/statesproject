import Pad from './Pad.jsx'
import React from 'react'
import padsData from './pads'

export default function Aap () {
  const [pads, setPads] = React.useState(padsData)
  const buttonElements = pads.map(pad => <Pad color={pad.color} key={pad.id} />)

  /**
   * Challenge part 2:
   * 1. Create a separate component called "Pad" and
   *    replace the `button` above with our <Pad /> component
   * 2. Pass the Pad component a prop called `color` with the
   *    value of the same name from the `padsData` objects
   * 3. In the Pad component, apply an inline style to the <button>
   *    to set the backgroundColor of the button.
   *
   * (We'll deal with the "on" property soon)
   */

  return (
    <main>
      <div className='bg-black min-h-screen flex items-center justify-center'>
        <div className='grid grid-cols-4 gap-4'>{buttonElements}</div>
      </div>
    </main>
  )
}
