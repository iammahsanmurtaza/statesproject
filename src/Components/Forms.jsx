import { useState } from 'react'
export default function Forms () {
  const jokes = [
    {
      setup: 'I got my daughter a fridge for her birthday.',
      punchline: "I can't wait to see her face light up when she opens it.",
    },
    {
      setup: 'How did the hacker escape the police?',
      punchline: 'He just ransomware!',
    },
    {
      setup: "Why don't pirates travel on mountain roads?",
      punchline: 'Scurvy.',
    },
    {
      setup: 'Why do bees stay in the hive in the winter?',
      punchline: 'Swarm.',
    },
    {
      setup: "What's the best thing about Switzerland?",
      punchline: "I don't know, but the flag is a big plus!",
    },
  ]

  const [shownJokes, setShownJokes] = useState(() => jokes.map(() => false))

  function signUp (formData) {
    // console.log(formData.get('password'))
    // console.log(formData.get('email'))
    // console.log(formData.get('description'))
    // console.log(formData.get('radio'))
    // console.log(...formData.getAll('checkbox'))
    // console.log(formData.get('favDrop'))
    console.log(Object.fromEntries(formData))
    // but it does not add the arrays for the chekboxes
    // which are multiple selected
    // so we have to that manually
    console.log(...formData.getAll('checkbox'))
  }

  function toggleJoke (index) {
    setShownJokes(prev => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <>
      <div className='min-h-screen bg-teal-400 flex flex-col items-center pt-10'>
        <h1 className='text-5xl font-bold text-black mb-10'>Signup form</h1>

        <form
          action={signUp}
          //   onSubmit={submitHandler}
          //   method='POST'
          className='flex flex-col gap-5 w-72'
        >
          <label htmlFor='email' className='text-2xl text-black'>
            Email:
          </label>

          <input
            id='email'
            type='email'
            name='email'
            placeholder='jonas@Schemedtmann.com'
            className='h-12 px-4 rounded-full border border-gray-500 bg-gray-100 text-lg outline-none'
          />

          <label htmlFor='password' className='text-2xl text-black'>
            Password:
          </label>

          <input
            id='password'
            type='password'
            name='password'
            className='h-12 px-4 rounded-full border border-gray-500 bg-gray-100 text-lg outline-none'
          />
          {/* 1. Clean Minimal */}
          <div className='space-y-2'>
            <label
              htmlFor='description'
              className='text-sm font-semibold text-gray-700'
            >
              Description
            </label>

            <textarea
              id='description'
              name='description'
              rows='5'
              placeholder='Write something...'
              className='w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-amber-50'
            ></textarea>
          </div>
          <fieldset className='flex flex-col'>
            <legend>Empoyment</legend>
            <label htmlFor='radio'>
              <input
                type='radio'
                name='radio'
                value='Unemployed'
                defaultChecked={true}
              />
              Unemployed
            </label>
            <label htmlFor='radio'>
              <input type='radio' name='radio' value='Part-Time' />
              Part-Time
            </label>
            <label htmlFor='radio'>
              <input type='radio' name='radio' value='Full-Time' />
              Full-Time
            </label>
          </fieldset>

          <fieldset className='flex flex-col gap-3'>
            <legend>Dietry Control</legend>
            <label htmlFor='radio'>
              <input type='checkbox' name='checkbox' value='Keto' />
              Keto
            </label>
            <label htmlFor='radio'>
              <input type='checkbox' name='checkbox' value='Carnivorous' />
              Carnivorous
            </label>
            <label htmlFor='radio'>
              <input type='checkbox' name='checkbox' value='Vegan' />
              Vegan
            </label>
          </fieldset>
          <label htmlFor='favDrop'></label>
          <select name='favDrop' id='favDrop'>
            <option value='' disabled>
              Choose Any Color
            </option>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Blue</option>
            <option>Indigo</option>
            <option>Violet</option>
          </select>
          <button
            type='submit'
            className='mt-5 h-12 rounded-full border border-gray-500 bg-gray-100 text-2xl hover:bg-gray-200'
          >
            Submit
          </button>
        </form>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold text-slate-800'>
              Classic Dad Jokes
            </h1>
            <p id='Hidden' className='text-slate-500 mt-2'>
              {'A collection of painfully good jokes'}
            </p>
          </div>

          <div className='space-y-6'>
            {jokes.map((joke, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-md p-6 border border-slate-200 hover:shadow-lg transition'
              >
                <h2 className='text-xl font-semibold text-slate-800'>
                  {joke.setup}
                </h2>
                <p id='Hidden' className='mt-3 text-slate-600'>
                  {shownJokes[index] && joke.punchline}
                </p>
                <button
                  type='button'
                  onClick={() => toggleJoke(index)}
                  className='mt-5 h-12 px-7 rounded-full border border-gray-500 bg-gray-100 text-2xl hover:bg-gray-200'
                >
                  {shownJokes[index] ? 'Hide' : 'Show'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
