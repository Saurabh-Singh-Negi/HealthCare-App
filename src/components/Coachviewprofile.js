import { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import user from '../images/user.svg'

const Coachviewprofile = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        const coachId = sessionStorage.getItem('id');
        if(coachId == "" || coachId == null) {
            navigate("/");
        }
        else {
            setId(coachId);
            setStatus(true);
        }
        axios.get("http://localhost:3000/coaches/?id=" + coachId)
        .then(res => {
            
            if(res.data.length > 0) {
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
                <Link to="/"><h1 className="font-bold text-xl cursor-pointer">WeCare</h1></Link>

                <div className='flex flex-row gap-4'>
                    <Link to="/coachviewprofile">View Profile</Link>
                    <Link to="/coachdashboard">My Schedule</Link>
                    <p>Call Us: 123 123434443</p>
                    <Link to="/">Logout</Link>
                </div>
            </nav>

            {
                data.map(ele => {

                return (
                    
                    <div key={data.coachId} className="flex text-white bg-black items-center mx-auto my-4 w-1/3 border-2 border-red-600 cursor-pointer">
                        <div>
                            <img src={user} className="w-2/3" alt="this is image" />
                        </div>
                        <ul className="flex flex-col w-full">
                            <li>Coach Id: {ele.id}</li>
                            <li>Date of birth: {ele.dateOfBirth}</li>
                            <li>Mobile No. {ele.mobileNumber}</li>
                            <li>Speciality: {ele.speciality}</li>
                        </ul>
                    </div>
                )})    
            }


        </>
    )
}

export default Coachviewprofile;