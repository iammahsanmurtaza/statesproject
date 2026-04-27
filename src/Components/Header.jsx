import Svgv from './Svgv.svg'
export default function Header () {
  return (
    <>
      <div className='flex justify-center shadow-md'>
        <img src={Svgv} alt='svg' className='w-32 h-32 ' />
        <h1 className='text-center text-4xl mt-10'>Chef Claude</h1>
      </div>
    </>
  )
}
