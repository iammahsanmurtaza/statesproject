import { useState } from 'react'

export default function Main () {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const addItem = formData => {
    // event.preventDefault()

    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    const normalizedValue = trimmedValue.toLowerCase()
    const duplicateIndex = items.findIndex(
      (item, i) => item.toLowerCase() === normalizedValue && i !== editIndex
    )

    if (duplicateIndex !== -1) {
      alert('This ingredient already exists. Please enter a different value.')
      return
    }

    if (editIndex !== null) {
      setItems(prev =>
        prev.map((item, i) => (i === editIndex ? trimmedValue : item))
      )
      setEditIndex(null)
    } else {
      setItems(prev => [...prev, trimmedValue])
    }

    setInputValue('')
  }

  const mapping = items.map((ingredient, index) => (
    <li
      key={index}
      className='flex items-center justify-between gap-4 bg-white/90 border border-gray-200 rounded-2xl px-4 py-3 shadow-sm'
    >
      <span className='flex-1 text-gray-800'>{ingredient}</span>
      <div className='flex items-center gap-2'>
        <button
          type='button'
          onClick={() => {
            setEditIndex(index)
            setInputValue(ingredient)
          }}
          className='px-4 py-2 bg-violet-600 text-white rounded-2xl text-sm hover:bg-violet-700 transition'
        >
          Edit
        </button>
        <button
          type='button'
          onClick={() => {
            setItems(prev => prev.filter((_, i) => i !== index))
            if (editIndex === index) {
              setEditIndex(null)
              setInputValue('')
            }
          }}
          className='px-4 py-2 bg-red-600 text-white rounded-2xl text-sm hover:bg-red-700 transition'
        >
          Remove
        </button>
      </div>
    </li>
  ))

  return (
    <>
      <div className='flex justify-center mt-5 px-4'>
        <div className='w-full max-w-4xl space-y-6'>
          <form
            action={addItem}
            className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-white/80 p-5 rounded-3xl shadow-lg border border-gray-200'
          >
            <input
              type='text'
              placeholder='e.g. oregano'
              className='flex-1 px-5 py-3 text-xl border border-gray-300 rounded-2xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100'
              name='Ingredient'
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
            />
            
            <button className='px-8 py-3 bg-black text-white text-xl rounded-2xl whitespace-nowrap hover:bg-violet-700 transition'>
              {editIndex !== null ? 'Save ingredient' : '+ Add ingredient'}
            </button>
          </form>

          <ul className='space-y-3 list-disc list-inside marker:text-black text-gray-800 text-lg'>
            {mapping}
          </ul>
        </div>
      </div>
    </>
  )
}
