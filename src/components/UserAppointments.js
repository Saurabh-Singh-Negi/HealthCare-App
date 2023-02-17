import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import Footer from './Footer';
const UserAppointments = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);
    const {id} = useParams();
    // const [status, setStatus] = useState(false);
    useEffect(() => {
        let returnedUserId = sessionStorage.getItem("returnedUserId");
    
        if(returnedUserId == "" || returnedUserId == null) {
            navigate('/');
        }
        
        axios.get("http://localhost:3000/bookings/?userId=" + returnedUserId)
        .then(res => {
            if(res.data.length > 0) {
                setData(res.data);
                console.log("data",res.data);
            }
        })
        .catch(error => {
            console.log(error);
            console.log("error");

        })
    },[data])

    function handleDelete(bookingId) {
        var res = window.confirm("want to delete");
        if(res) {
            axios.delete("http://localhost:3000/bookings/" + bookingId)
            .then(res => {
                console.log("deleted", res.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
                <UserNavbar />
                
                <div className='flex flex-col md:flex-row md:flex-wrap w-[90%] mx-auto gap-2'>
                {
                    data.map((ele) => {
                        return (
                            <div key={ele.id} className="flex flex-col rounded-lg text-white bg-black justify-center sm:font-semibold text-xl items-center mx-auto my-4 p-2 sm:p-4 w-100 md:w-1/3 border-2 border-red-600">
                                <p>Appointment Date:</p>
                                <p>{ele.appointmentDate}</p>
                                <p>Slot: {ele.slot}</p>

                                <p>Booking Id: {ele.id}</p>
                                <p>User Id: {ele.userId}</p>
                                <p>Coach Id: {ele.coachId}</p>

                                <div className='flex flex-col gap-1'>
                                    <button className='bg-green-600 rounded p-1' onClick={() => {
                                        navigate("/bookappointment", {state: {
                                            userId: ele.userId,
                                            coachId: ele.coachId,
                                            bookingId: ele.id,
                                            action: "edit"
                                        }})
                                    }}>Reschedule Appointment</button>
                                
                                    <button className='bg-red-600 rounded p-1' onClick={() => handleDelete(ele.id)}>Cancel Appointment</button>
                                </div>
                                
                            </div>
                        )
                    })
                }
                </div>
                <Footer />
            </div>
        </>
    )
}

export default UserAppointments;