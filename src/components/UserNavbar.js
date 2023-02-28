import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(sessionStorage.getItem("returnedUserId"));
  return (
    <div className='text-center'>
    <nav className="flex flex-col sm:flex-row justify-between bg-[#111] text-white p-1 sm:p-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
        </Link>
        
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center">
            <Link to={`/userprofile/${userId}`}>View Profile</Link>
            
            <button onClick={() => {navigate("/userappointments")}}>My Appointment</button>
            <p>Call Us: 123 123434443</p>
            <Link to="/userlogin">Logout</Link>
        </div>
    </nav>
    </div>
  )
}

export default UserNavbar