import React from 'react'
import InputItem from './InputItem'

function SearchSection() {
  return (
    <div className='p-2 md:pd-5 border-[2px] rounded-xl'>
       <p className='text-[2xl] font-bold'>
        Get  ride</p>
        <InputItem type='source'/> 
        <InputItem type='destination'/> 
        <button className='p-3 bg-black w-full mt-5 
        text-white text-xl  rounded-xl'>
        Search
        </button>
    </div>
  )
}

export default SearchSection