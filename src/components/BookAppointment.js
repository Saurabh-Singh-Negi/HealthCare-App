import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import UserDashboard from './UserDashboard';

const BookAppointment = () => {
    const location = useLocation();
    console.log(location.state.coachId);
  return (
    <>
        <nav className="flex justify-between bg-[#111] text-white p-4">
            <Link to="/">
            <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
            </Link>
        </nav>
        <form className='flex flex-col w-1/3 mx-auto bg-black text-white p-2 mt-2 gap-2'>
            <label htmlFor="">Date of Appointment</label>
            <input type="date" className='w-1/3'/>
            
            <label>Preferrred Slot
            <input type="radio" name='time' /> 9AM to 10AM
            <input type="radio" name='time' /> 10AM to 11AM
            <input type="radio" name='time' /> 11AM to 12AM
            <br />
            <input type="radio" name='time' /> 2AM to 3AM
            <input type="radio" name='time' /> 3AM to 4AM
            <input type="radio" name='time' /> 4AM to 5AM
            </label>

            <button type='submit' className='bg-green-600'>Confirm your appointment</button>
        </form>
    </>
  )
}

export default BookAppointment;