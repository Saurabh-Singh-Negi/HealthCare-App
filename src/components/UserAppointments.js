import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserAppointments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);
    // const [status, setStatus] = useState(false);
    useEffect(() => {
        
        axios.get("http://localhost:3000/bookings/?userId=" + location.state.userId)
        .then(res => {
            if(res.data.length > 0) {
                console.log("appoint", res.data);
                setData(res.data);
                // setStatus(true);
            }
        })
        .catch(error => {
            console.log(error);
            console.log("error");

        })
    },[])

    function handleDelete(bookingId) {
        
        axios.delete("http://localhost:3000/bookings/" + bookingId)
        .then(res => {
            console.log("deleted", res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <div>
                {
                    data.map((ele) => {
                        return (
                            <div key={ele.id} className="border-2 border-black w-[300px]">
                                <p>Appointment Date:</p>
                                <p>{ele.appointmentDate}</p>
                                <p>Slot: {ele.slot}</p>

                                <p>Booking Id: {ele.id}</p>
                                <p>User Id: {ele.userId}</p>
                                <p>Coach Id: {ele.coachId}</p>

                                <div className='flex flex-col gap-1 w-[200px]'>
                                    <button className='bg-green-600' onClick={() => {
                                        navigate("/bookappointment", {state: {
                                            userId: ele.userId,
                                            coachId: ele.coachId,
                                            bookingId: ele.id,
                                            action: "edit"
                                        }})
                                    }}>Reschedule Appointment</button>
                                
                                    <button className='bg-red-600' onClick={() => handleDelete(ele.id)}>Cancel Appointment</button>
                                </div>
                                <p>------------------------------------</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default UserAppointments;