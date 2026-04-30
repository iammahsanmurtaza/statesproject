import { useState } from 'react'
import Count from './Count.jsx'
export default function Counter () {
  const [count, setCount] = useState(0)
  function subtract () {
    setCount(prev => prev - 1)
  }
  function add () {
    setCount(prev => prev + 1)
  }
  console.log('Hello Counter')
  return (
    <main className='flex min-h-80 items-center justify-center px-4 py-12'>
      <div className='flex items-center justify-center gap-8 rounded-full border border-white/10 bg-slate-950/95 px-8 py-8 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.9)]'>
        <button
          type='button'
          className='flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-4xl font-bold text-slate-100 shadow-lg transition hover:bg-slate-800 active:scale-95'
          onClick={subtract}
          aria-label='Decrease count'
        >
          -
        </button>

        <div className='flex h-32 w-32 items-center justify-center rounded-full bg-slate-950 text-center shadow-inner shadow-white/5 ring-1 ring-white/10'>
          <span className='text-5xl font-semibold tracking-tight text-white'>
            {<Count count={count} />}
          </span>
        </div>

        <button
          type='button'
          className='flex h-16 w-16 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-4xl font-bold text-slate-100 shadow-lg transition hover:bg-slate-800 active:scale-95'
          onClick={add}
          aria-label='Increase count'
        >
          +
        </button>
      </div>
    </main>
  )
}
