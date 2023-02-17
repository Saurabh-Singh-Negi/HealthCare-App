import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(sessionStorage.getItem("returnedUserId"));
  return (
    <nav className="flex justify-between items-center bg-[#111] text-white p-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
        </Link>
        
        <div className='flex flex-row gap-4'>
            <Link to={`/userprofile/${userId}`}>View Profile</Link>
            
            <button onClick={() => {navigate("/userappointments")}}>My Appointment</button>
            <p>Call Us: 123 123434443</p>
            <Link to="/userlogin">Logout</Link>
        </div>
    </nav>
  )
}

export default UserNavbar