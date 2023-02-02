import axios from "axios";
import { useState } from "react";

const CoachSignup = () => {
    const [data, setData] = useState({
        username: "",
        pwd:"",
        dob:"",
        gender:"",
        mobile:"",
        speciality:""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]:value})   
    }

    const handleSubmit = () => {
        
        axios.post(" http://localhost:4000/coaches")
    }
    return (
        <>
            <div>
                <nav className="flex justify-between bg-[#111] text-white p-4">
                    <h1 className="font-bold text-xl">WeCare</h1>
                    <p>Call Us: 123 123434443</p>
                </nav>

                <div>
                    <h1>Life Coach Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text" name="username" onChange={handleChange} id="name" placeholder="enter name" className="border-2 border-black"/>

                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" onChange={handleChange} name="pwd" className="border-2 border-black"/>

                        <label htmlFor="dob" className="block">Date Of Birth</label>
                        <input type="date" onChange={handleChange} name="dob" id="dob" className="block border-2 border-black"/>

                        <input type="radio" id="male" name="gender"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender"/>
                        <label htmlFor="female">Female</label>

                        <label htmlFor="mobile" className="block">Mobile No.</label>
                        <input type="tel" onChange={handleChange} name="mobile" id="mobile" className="border-2 border-black"/>

                        <label htmlFor="speciality" className="block">Spreciality</label>
                        <input type="text" onChange={handleChange} name="speciality" id="speaciality" className="border-2 border-black"/>
                        
                        <button type="submit">Register</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default CoachSignup;