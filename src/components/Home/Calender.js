import React from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
  return (
    <div className='font-mono bg-lime-200 flex justify-center py-5 '>
      <div>
      <h1 className='text-4xl text-rose-900 font-bold mt-9'>Calender</h1>
      <p className='mt-10 '><DayPicker /></p>
      </div>
    </div>
  )
}

export default Calender