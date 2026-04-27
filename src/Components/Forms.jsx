export default function Forms () {
  //   function submitHandler (event) {
  //     event.preventDefault()
  //     const formEl = event.currentTarget
  //     const formData = new FormData(formEl)
  //     const email = formData.get('email')
  //     const password = formData.get('password')
  //     console.log(email, password)
  //     formEl.reset()
  //   }
  function signUp (formData) {
    console.log(formData.get('password'))
    console.log(formData.get('email'))
    console.log(formData.get('description'))
    console.log(formData.get('radio'))
    console.log(...formData.getAll('checkbox'))
    console.log(formData.get('favDrop'))
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
      </div>
    </>
  )
}
