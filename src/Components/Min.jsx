import { useState } from 'react'

export default function Min () {
  const [meme, setMeme] = useState({
    topText: 'Wallahi',
    bottomText: 'Walk into Mordor',
    imageUrl: 'http://i.imgflip.com/1bij.jpg'
  })

  function handleChange (event) {
    const { value } = event.currentTarget
    setMeme(prevMeme => ({ ...prevMeme, topText: value }))
  }

  return (
    <main className='flex flex-col items-center py-9'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block text-gray-700 font-medium text-sm mb-1'>
            Top Text
          </label>
          <input
            type='text'
            placeholder='One does not simply'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
            className='w-full min-h-10 px-1.5 border border-gray-300 rounded text-sm focus:outline-none font-sans'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium text-sm mb-1'>
            Bottom Text
          </label>
          <input
            type='text'
            placeholder='Walk into Mordor'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
            className='w-full min-h-10 px-1.5 border border-gray-300 rounded text-sm focus:outline-none font-sans'
          />
        </div>
      </div>

      <button className='w-full min-h-10 bg-linear-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold text-base mb-4 rounded transition duration-200 cursor-pointer'>
        Get a new meme image 🖼
      </button>

      <div className='relative flex flex-col justify-center items-center w-full'>
        <img
          src={meme.imageUrl}
          alt='meme'
          className='max-w-full h-auto rounded-sm'
        />
        <span
          className='absolute top-0 left-0 right-0 text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl my-3 px-1.5 leading-tight'
          style={{
            fontFamily: 'impact, sans-serif',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000',
            letterSpacing: '1px'
          }}
        >
          {meme.topText}
        </span>
        <span
          className='absolute bottom-0 left-0 right-0 text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl my-3 px-1.5 leading-tight'
          style={{
            fontFamily: 'impact, sans-serif',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000',
            letterSpacing: '1px'
          }}
        >
          {meme.bottomText}
        </span>
      </div>
    </main>
  )
}
