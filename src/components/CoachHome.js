import { useEffect, useState } from 'react';
import axios from 'axios';
import CoachLogin from './CoachLogin';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CoachNavbar from "./CoachNavbar";

const CoachHome = () => {
  
    const navigate = useNavigate();    
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    const [dataAbsent, setDataAbsent] = useState(false)
    useEffect(() => {
        let coachId = sessionStorage.getItem('id');
        if(coachId === "" || coachId === null) {
          
            navigate('/');
        }
        else {
            setId(coachId);
            setStatus(true);
        }
        axios.get("https://wecare-api-qqg2.onrender.com/bookings/?coachId" + "=" + coachId)
        .then(res => {
            if(res.data.length>0) {             
              setData(res.data);
            }
            else {
              setDataAbsent(true);
            }
        })
        .catch(error => {
            console.log(error);
        })
    },[]);

    
  return (
    <>
    <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
      <CoachNavbar />

      <div className='flex flex-col md:flex-row md:flex-wrap w-[90%] sm:w-[70%] mx-auto gap-2'>
        { dataAbsent?
        <h1 className='mx-auto text-3xl font-semibold inline-block text-center'>No bookings available</h1>:
        data.map((ele) => {
          return (
            <div key={ele.id} className="flex flex-col rounded-lg text-white bg-black justify-center sm:font-semibold text-xl items-center mx-auto my-4 h-[150px] p-2 sm:p-0 w-100 md:w-1/3 border-2 border-red-600 cursor-pointer">
              <p>Appointment: {ele.appointmentDate}</p>
              <p>Slot: {ele.slot}</p>
              <p>Booking Id: {ele.id}</p>
              <p>User Id: {ele.userId}</p>
            </div>
          )
        })}
      </div>

      <Footer/>
      </div>
      
    </>
  );
};

export default CoachHome;
