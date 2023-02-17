import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import axios from 'axios';
import UserNavbar from './UserNavbar';
import Footer from './Footer';

const BookAppointment = () => {
    const location = useLocation();
    const navigate = useNavigate();
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
            navigate("/confirmappointment");
        })
        .catch(error => {
            console.log(error);
        })   
    }

    function handleReschedule(event) {
        
        event.preventDefault();
        const bookingDetails = {appointmentDate: data.appointmentDate, slot: data.slot};
        axios.patch("http://localhost:3000/bookings/"+ location.state.bookingId,  bookingDetails)
        .then(res => {
            console.log("successfuly edited", res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

  return (
    <>
    <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
        <UserNavbar />
        <form className='flex flex-col w-1/3 mx-auto bg-black text-white p-2 mt-2 gap-2 rounded-lg text-center'>
            
            <label className='text-white sm:text-xl sm:font-semibold'>Date of Appointment</label>
            <input type="date" onChange={handleChange} className='mx-auto w-1/2 text-black rounded p-2' name='appointmentDate'/>
            <p className='text-white sm:text-xl sm:font-semibold'>Preferrred Slot</p>
            <label>
            <input type="radio" onClick={handleChange} value="9AM to 10AM" name='slot' /> 9AM to 10AM
            <input type="radio" onClick={handleChange} value="10AM to 11AM" name='slot' /> 10AM to 11AM
            <input type="radio" onClick={handleChange} value="11AM to 12AM" name='slot' /> 11AM to 12AM
            
            <input type="radio" onClick={handleChange} value="2AM to 3AM" name='slot' /> 2AM to 3AM
            <input type="radio" onClick={handleChange} value="3AM to 4AM" name='slot' /> 3AM to 4AM
            <input type="radio" onClick={handleChange} value="4AM to 5AM" name='slot' /> 4AM to 5AM
            </label>

            {location.state.action != "edit" ?
            <button type='submit' onClick={handleSubmit} className='bg-green-600 p-1'>Confirm your appointment</button>
            :<button type='submit' onClick={handleReschedule} className='bg-green-600 p-1'>Reschedule your appointment</button>
        }
        </form>
        <Footer />
        </div>
    </>
  )
}

export default BookAppointment;