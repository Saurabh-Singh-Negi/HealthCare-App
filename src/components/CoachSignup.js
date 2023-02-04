import axios from "axios";
import { useState } from "react";

const CoachSignup = () => {
    const [data, setData] = useState({
        id:"",
        username: "",
        pwd:"",
        dob:"",
        gender:"",
        mobile:"",
        speciality:""
    });

    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]:value})  
        
    }
    var newAge = 0;
    function calculateAge() {
        const newDate = new Date();
        const birthDate = new Date(data.dob);
        var age = newDate.getFullYear() - birthDate.getFullYear();
        if(newDate.getMonth() < birthDate.getMonth()) {
            age--;
        }
        else {
            if(newDate.getMonth() == birthDate.getMonth() && newDate.getDay() < birthDate.getDate()) {
                age--;
            }
        }
        
        return age;
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let newCoach = { id:data.id, name: data.username, password: data.pwd, gender: data.gender, dateOfBirth: data.dob, mobileNumber: data.mobile, speciality: data.speciality}
        newAge = calculateAge();
        
        if(data.username.length < 3 || data.pwd.length < 5 || newAge<20 || newAge>100 || data.mobile.length<10 || data.gender.length==0) {
            setError(true);
        }
        
        axios.post("http://localhost:4000/coaches", newCoach)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
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
                    <form>
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text"  name="username" onChange={handleChange} id="name" placeholder="enter name" className="block border-2 border-black"/>
                        {error && data.username.length > 0 && data.username.length < 3 ?
                        <label className="text-red-600 block">Name should have 3 to 50 characters</label>: ""}
                        
                        {error && data.username.length == 0 ?
                        <label className="text-red-600 block">Name can't be empty</label>: ""}
                        

                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" onChange={handleChange} name="pwd" className="block border-2 border-black"/>
                        {error&&data.pwd.length>0&&data.pwd.length<5?
                        <label className="text-red-600 block">Password should have 5 to 10 characters</label>:""}
                        {error&&data.pwd.length==0?    
                        <label className="text-red-600 block">Password can't be empty</label>:""}

                        <label htmlFor="dob" className="block">Date Of Birth</label>
                        <input type="date" onChange={handleChange} name="dob" id="dob" className="block border-2 border-black"/>
                        
                        {error && data.dob.length!=0 && (newAge<20||newAge>100)?
                        <label className="text-red-600 block">Age should be between 20 and 100 years</label>:""}
                        {error && data.dob.length==0?
                        <label className="text-red-600 block">DOB can't be empty</label>:""}

                        <input type="radio" onClick={handleChange} id="male" value="male" name="gender"/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" onClick={handleChange} id="female" value="female" name="gender"/>
                        <label htmlFor="female">Female</label>
                        {error && data.gender.length==0?
                        <label className="text-red-600 block">Gender is required</label>:""}

                        <label htmlFor="mobile" className="block">Mobile No.</label>
                        <input type="tel" onChange={handleChange} name="mobile" id="mobile" className="border-2 border-black"/>
                        {error && data.mobile.length>0 && data.mobile.length<10?
                        <label className="text-red-600 block">Mobile Number should have 10 digits</label>:""}
                        {error && data.mobile.length==0?
                        <label className="text-red-600 block">Mobile no. can't be empty</label>:""}

                        <label htmlFor="speciality" className="block">Spreciality</label>
                        <input type="text" onChange={handleChange} name="speciality" id="speaciality" className="border-2 border-black"/>
                        {error && data.speciality.length>0 && (data.speciality.length<10 || data.speciality.length>50)?
                        <label className="text-red-600 block">Speciality should have 10 to 50 characters</label>:""}
                        {error && data.speciality.length==0?
                        <label className="text-red-600 block">Speciality can't be empty</label>:""}
                        
                        <button type="submit" className="block border-2 border-black mt-2" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default CoachSignup;