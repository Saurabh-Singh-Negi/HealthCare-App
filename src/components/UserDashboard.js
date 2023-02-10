import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import user from "../images/user.svg"

const UserDashboard = () => {
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/coaches")
    .then(res => {
      if(res.data.length > 0) {
        setCoaches(res.data);
      }
    })
    .catch(error => {
      console.log(error);
    })
  },[]);

  return (
    <>
   
      <div>
      <nav className="flex justify-between bg-[#111] text-white p-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
        </Link>
        </nav>

        

        <div >
          {coaches.map((ele) => {
              return (
                <div key={ele.id} className="flex flex-row text-white bg-black items-center mx-auto my-4 w-1/4 border-2 border-red-600 cursor-pointer">
                  <div>
                    <img src={user}  alt="user pic" />
                  </div>
                  <div className='flex flex-col w-full'>
                    <p>{ele.name}</p>
                    <p>Coach id:{ele.id}</p>
                    <p>Mobile No.{ele.mobileNumber}</p>
                    <p>Speciality:{ele.speciality}</p>
                  </div>
                </div>
              ) 
            })}
        </div>
      </div>
    </>
  )
}

export default UserDashboard