import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
 
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
    <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
        <Navbar/>
        <div className="flex flex-col gap-4 justify-center items-center mx-auto w-5/6 sm:w-[800px] bg-[#000] text-white text-lg  rounded-lg p-4 my-10">
            <h1 className="text-center text-4xl">User Profile</h1>
            <form>
                <div className="flex sm:flex-row flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="username" id="name" onChange={handleChange} placeholder="name" className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="text" name="mobile" id="mobile" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" name="dob" id="dob" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <label htmlFor="pin">Pincode</label>
                    <input type="text" name="pin" id="pin" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <label htmlFor="state">State</label>
                    <input type="text" name="state" id="state" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="pwd" id="pwd" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <div className="flex flex-row gap-1 h-[70px] items-center p-1">
                        <label>Gender</label>
                        <input type="radio" name="gender" onChange={handleChange} value="male"/>Male
                        <input type="radio" name="gender" onChange={handleChange} value="female"/>Female
                    </div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block"/>
                </div>
                </div>
                <div className="text-center">
                <button type="submit" className="bg-[#06B6D4] w-24 h-10 rounded text-lg cursor-pointer mt-2" onClick={handleSubmit}>Register</button>
                </div>
            </form>
        </div>
        <Footer/>
        </div>
        </>
    )
}

export default UserSignup;