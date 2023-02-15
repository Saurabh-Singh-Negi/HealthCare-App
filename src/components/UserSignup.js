import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
const UserSignup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [data, setData] = useState(
        {
            username:"",
            mobile:"",
            dob:"",
            pin:"",
            state:"",
            pwd:"",
            email:"",
            gender:"",
            city:"",
            country:""
        }
    );

    function handleChange(event) {
        const {name,value}  = event.target;
        setData({...data, [name]:value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userDetails = {id:"", name:data.username, password:data.pwd, gender:data.gender, dateOfBirth:data.dob, email:data.email, mobileNumber:data.mobile,pincode:data.pin,city:data.city,state:data.state,country:data.country}
        axios.post("http://localhost:3000/users", userDetails)
        .then(res => {
            navigate("/registerconfirmation", {state: {
                userId: res.data.id,
                action: "user"
              }});
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>

        <nav className="flex justify-between bg-[#111] text-white p-4">
            <Link to="/"><h1 className="font-bold text-xl cursor-pointer">WeCare</h1></Link>
            <p>Call Us: 123 123434443</p>
        </nav>
        <div>
            <h1 className="text-center">User Profile</h1>
            <form className="flex flex-col w-1/3 mx-auto border-2 border-black">
                <label htmlFor="name">Name</label>
                <input type="text" name="username" id="name" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" name="mobile" id="mobile" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="dob">Date of birth</label>
                <input type="date" name="dob" id="dob" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="pin">Pincode</label>
                <input type="text" name="pin" id="pin" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="pwd">Password</label>
                <input type="password" name="pwd" id="pwd" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} className="blok border-2 border-black w-1/2"/>
                <label>Gender</label>
                <input type="radio" name="gender" onChange={handleChange} value="male"/>Male
                <input type="radio" name="gender" onChange={handleChange} value="female"/>Female
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" onChange={handleChange} className=" border-2 border-black w-1/2"/>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" onChange={handleChange} className=" border-2 border-black w-1/2"/>

                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>
        </div>
        </>
    )
}

export default UserSignup;