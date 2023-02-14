import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
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
                navigate("/dashboard", {state: {userId: res.data[0].id}});
                console.log("success")
                console.log(res.data);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <div>
                <nav className="flex justify-between bg-[#111] text-white p-4">
                    <Link to="/">
                        <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
                    </Link>
                    <p>Call Us: 123 123434443</p>
                </nav>

                <div className="bg-black w-[400px] text-white text-lg mx-auto flex flex-col justify-center ">
                    <h1 className="text-center">User Login</h1>
                    <form className="flex flex-col w-1/6 mx-auto">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleChange} className="border-2 border-black" id="email" name="email"/>
                        <label htmlFor="pwd">Password</label>
                        <input type="password" onChange={handleChange} className="border-2 border-black" id="pwd" name="pwd"/>

                        <button type="submit" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;
