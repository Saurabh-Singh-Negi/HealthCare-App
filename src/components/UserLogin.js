import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserLogin = () => {
    useEffect(() => {
        sessionStorage.clear();
      }, []);

    const navigate = useNavigate();
    const [data, setData] = useState({
        email:"",
        pwd:""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setData({...data, [name]:value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get("http://localhost:3000/users?email=" + data.email + "&password=" + data.pwd)
        .then(res => {
            
            if(res.data.length > 0) {
                const returnedUserId = res.data[0].id;
                sessionStorage.setItem("returnedUserId", returnedUserId);
                navigate("/dashboard");
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
            <Navbar />

                <div className="flex flex-col gap-4 justify-center items-center mx-auto w-5/6 sm:w-[500px] h-[250px] bg-[#000] text-white text-lg text-center rounded-lg">
                    <h1 className="sm:text-3xl">Login As User</h1>
                    <form className="flex flex-col gap-2 items-center">
                        
                        <input type="email" onChange={handleChange} className="rounded w-48 sm:w-64 h-10 text-black p-1 block" id="email" name="email" 
                        placeholder="email"
                        />
                        
        
                        <input type="password" onChange={handleChange} className="rounded w-48 sm:w-64 h-10  text-black p-1 block" id="pwd" name="pwd"
                        placeholder="password"
                        />

                        <button type="submit" onClick={handleSubmit}
                        className="bg-[#06B6D4] w-24 h-10 rounded text-lg cursor-pointer">Login</button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default UserLogin;
