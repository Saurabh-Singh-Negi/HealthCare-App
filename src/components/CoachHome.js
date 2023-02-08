import { useEffect, useState } from 'react';
import axios from 'axios';
import CoachLogin from './CoachLogin';
import { useNavigate, Link } from 'react-router-dom';
const CoachHome = () => {
    const navigate = useNavigate();
    
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        let coachId = sessionStorage.getItem('id');
        if(coachId === "" || coachId === null) {
            navigate('/');
        }
        else {
            setId(coachId);
            setStatus(true);
        }
        axios.get("http://localhost:3000/bookings/?coachId" + "=" + coachId)
        .then(res => {
            if(res.data.length>0) {
              console.log(res.data);              
              setData(res.data);
            }
        })
        .catch(error => {
            console.log(error);
        })
    },[]);

    
  return (
    <>
      <nav className="flex justify-between bg-[#111] text-white p-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
        </Link>
        
        <div className='flex flex-row gap-4'>
        <Link to="/">Logout</Link>
        <p>Call Us: 123 123434443</p>
      </div>
      </nav>

      <div>
        {data.map((ele) => {
          return (
            <div key={ele.id} className="flex flex-col text-white bg-black items-center mx-auto my-4 w-1/4 border-2 border-red-600 cursor-pointer">
              <p>Appointment: {ele.appointmentDate}</p>
              <p>Slot: {ele.slot}</p>
              <p>Booking Id: {ele.id}</p>
              <p>User Id: {ele.userId}</p>
            </div>
          )
        })}
      </div>
      
    </>
  );
};

export default CoachHome;
