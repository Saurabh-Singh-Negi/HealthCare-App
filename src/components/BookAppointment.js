import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import axios from 'axios';

const BookAppointment = () => {
    const location = useLocation();
    const [data, setData] = useState({
        appointmentDate:"",
        slot:""
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setData({...data, [name]:value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        const bookingDetails = {appointmentDate: data.appointmentDate, slot: data.slot, userId: location.state.userId, coachId: location.state.coachId};
        axios.post("http://localhost:3000/bookings", bookingDetails)
        .then(res => {
            console.log("success", res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <>
        <nav className="flex justify-between bg-[#111] text-white p-4">
            <Link to="/">
            <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
            </Link>
        </nav>
        <form className='flex flex-col w-1/3 mx-auto bg-black text-white p-2 mt-2 gap-2'>
            <label className='text-black'>Date of Appointment</label>
            <input type="date" onChange={handleChange} className='w-1/3' name='appointmentDate'/>
            
            <label>Preferrred Slot
            <input type="radio" onClick={handleChange} value="9AM to 10AM" name='slot' /> 9AM to 10AM
            <input type="radio" onClick={handleChange} value="10AM to 11AM" name='slot' /> 10AM to 11AM
            <input type="radio" onClick={handleChange} value="11AM to 12AM" name='slot' /> 11AM to 12AM
            
            <input type="radio" onClick={handleChange} value="2AM to 3AM" name='slot' /> 2AM to 3AM
            <input type="radio" onClick={handleChange} value="3AM to 4AM" name='slot' /> 3AM to 4AM
            <input type="radio" onClick={handleChange} value="4AM to 5AM" name='slot' /> 4AM to 5AM
            </label>

            <button type='submit' onClick={handleSubmit} className='bg-green-600'>Confirm your appointment</button>
        </form>
    </>
  )
}

export default BookAppointment;