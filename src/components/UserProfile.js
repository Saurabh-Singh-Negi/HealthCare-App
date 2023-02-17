import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserNavbar from './UserNavbar';
import Footer from './Footer';
import axios from 'axios';
import user from '../images/user.svg';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const {id} = useParams();

    
    useEffect(() => {
        let returnedUserId = sessionStorage.getItem("returnedUserId");
    
        if(returnedUserId == "" || returnedUserId == null) {
            navigate('/');
        }
        axios.get("http://localhost:3000/users/?id=" + id)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[])

  return (
    <>
    <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
        <UserNavbar />

        <div className=' mx-auto'>
        {data.map((ele) => {
          return (
            <div
              key={ele.id}
              className="flex flex-col sm:flex-row rounded-lg font-semibold text-white bg-black items-center justify-center my-4 w-[250px] sm:w-[500px] border-2 border-red-600 cursor-pointer">
              <div>
                <img src={user} className="w-[200px]" alt="this is image" />
              </div>
              <ul className="flex flex-col">
                <li>User Id: {ele.id}</li>
                <li>Name: {ele.name}</li>
                <li>Mobile No. {ele.mobileNumber}</li>
                <li>Email: {ele.email}</li>
              </ul>
            </div>
          );
        })}
        </div>
        
        <Footer/>
    </div>
    </>
  )
}

export default UserProfile