import React, { useEffect, useState } from 'react'
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import user from "../images/user.svg";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";

const UserDashboard = () => {
  const navigate = useNavigate();
  
  const [coaches, setCoaches] = useState([]);
  const [userId, setUserId] = useState("");
  var a = 20;
  useEffect(() => {
    let returnedUserId = sessionStorage.getItem("returnedUserId");
    
    if(returnedUserId == "" || returnedUserId == null) {
      navigate('/');
    }

    else {
      setUserId(returnedUserId);
    }

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
      <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">

      <UserNavbar />        

        <div className='flex flex-col md:flex-row md:flex-wrap w-[90%] sm:w-[70%] mx-auto gap-2'>
          {coaches.map((ele) => {
              return (
                <div key={ele.id} className="flex flex-col mx-auto sm:flex-row rounded-lg font-semibold text-white bg-black items-center justify-center my-4 w-[250px] sm:w-[450px] border-2 border-red-600 cursor-pointer p-2">
                  <div>
                    <img src={user}  alt="user pic" />
                  </div>
                  <div className='flex flex-col w-full'>
                    <p>{ele.name}</p>
                    <p>Coach id:{ele.id}</p>
                    <p>Mobile No.{ele.mobileNumber}</p>
                    <p>Speciality:{ele.speciality}</p>
                    <button type='submit' className='bg-green-600 rounded-lg h-10 font-semibold' onClick={(event) => {

                        navigate("/bookappointment", {state: {
                          coachId: ele.id,
                          userId: userId
                        }})
                      }}>Book appointment</button>
                  </div>
                </div>
              ) 
            })}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default UserDashboard