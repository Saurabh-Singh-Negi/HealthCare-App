import axios from "axios";
import { useState } from "react";
import CoachLogin from "./CoachLogin";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CoachSignup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    id: "",
    username: "",
    pwd: "",
    dob: "",
    gender: "",
    mobile: "",
    speciality: "",
  });

  const [userAge, setUserAge] = useState(0);

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  function calculateAge() {
    const newDate = new Date();
    const birthDate = new Date(data.dob);
    var age = newDate.getFullYear() - birthDate.getFullYear();
    if (newDate.getMonth() < birthDate.getMonth()) {
      age--;
    } else {
      if (
        newDate.getMonth() == birthDate.getMonth() &&
        newDate.getDay() < birthDate.getDate()
      ) {
        age--;
      }
    }

    return age;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var age = calculateAge();
    setUserAge(age);
    if (
      data.username.length < 3 ||
      data.pwd.length < 5 ||
      userAge < 20 ||
      userAge > 100 ||
      data.mobile.length < 10 ||
      data.gender.length == 0
    ) {
      setError(true);
    }

    if (
      !(
        data.username.length < 3 ||
        data.pwd.length < 5 ||
        userAge < 20 ||
        userAge > 100 ||
        data.mobile.length < 10 ||
        data.gender.length == 0
      )
    ) {
      let newCoach = {
        id: data.id,
        name: data.username,
        password: data.pwd,
        gender: data.gender,
        dateOfBirth: data.dob,
        mobileNumber: data.mobile,
        speciality: data.speciality,
      };
      
      axios
        .post("http://localhost:3000/coaches", newCoach)
        .then((res) => {
          navigate("/registerconfirmation", {state: {
            coachId: res.data.id,
            action: "coach"
          }});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
        <Navbar />

        <div className="flex flex-col gap-4 justify-center items-center mx-auto w-5/6 sm:w-[500px] bg-[#000] text-white text-lg  rounded-lg p-4 my-10">
          <h1 className="sm:text-3xl">Life Coach Profile</h1>
          <form className="flex flex-col gap-1">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              id="name"
              placeholder="name"
              className="rounded w-48 sm:w-64 h-10 text-black p-1 block"
            />
            {error && data.username.length > 0 && data.username.length < 3 ? (
              <label className="text-red-600 block">
                Name should have 3 to 50 characters
              </label>
            ) : (
              ""
            )}

            {error && data.username.length == 0 ? (
              <label className="text-red-600 block">Name can't be empty</label>
            ) : (
              ""
            )}

            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              name="pwd"
              placeholder="password"
              className="rounded w-48 sm:w-64 h-10 text-black p-1 block"
            />
            {error && data.pwd.length > 0 && data.pwd.length < 5 ? (
              <label className="text-red-600 block">
                Password should have 5 to 10 characters
              </label>
            ) : (
              ""
            )}
            {error && data.pwd.length == 0 ? (
              <label className="text-red-600 block">
                Password can't be empty
              </label>
            ) : (
              ""
            )}

            <label htmlFor="dob" className="block">
              Date Of Birth
            </label>
            <input
              type="date"
              onChange={handleChange}
              name="dob"
              id="dob"
              className="rounded w-48 sm:w-64 h-10 text-black p-1 block"
            />

            {error &&
            data.dob.length != 0 &&
            (userAge < 20 || userAge > 100) ? (
              <label className="text-red-600 block">
                {userAge} Age should be between 20 and 100 years
              </label>
            ) : (
              ""
            )}
            {error && data.dob.length == 0 ? (
              <label className="text-red-600 block">DOB can't be empty</label>
            ) : (
              ""
            )}
            <div className="flex gap-0.5">
              <input
                type="radio"
                onClick={handleChange}
                id="male"
                value="male"
                name="gender"
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                onClick={handleChange}
                id="female"
                value="female"
                name="gender"
              />
              <label htmlFor="female">Female</label>
              {error && data.gender.length == 0 ? (
                <label className="text-red-600 block">Gender is required</label>
              ) : (
                ""
              )} 
            </div>

            <label htmlFor="mobile" className="block">
              Mobile No.
            </label>
            <input
              type="tel"
              onChange={handleChange}
              name="mobile"
              id="mobile"
              placeholder="mobile"
              className="rounded w-48 sm:w-64 h-10 text-black p-1 block"
            />
            {error && data.mobile.length > 0 && data.mobile.length < 10 ? (
              <label className="text-red-600 block">
                Mobile Number should have 10 digits
              </label>
            ) : (
              ""
            )}
            {error && data.mobile.length == 0 ? (
              <label className="text-red-600 block">
                Mobile no. can't be empty
              </label>
            ) : (
              ""
            )}

            <label htmlFor="speciality" className="block">
              Spreciality
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="speciality"
              id="speaciality"
              placeholder="speciality"
              className="rounded w-48 sm:w-64 h-10 text-black p-1 block"
            />
            {error &&
            data.speciality.length > 0 &&
            (data.speciality.length < 10 || data.speciality.length > 50) ? (
              <label className="text-red-600 block">
                Speciality should have 10 to 50 characters
              </label>
            ) : (
              ""
            )}
            {error && data.speciality.length == 0 ? (
              <label className="text-red-600 block">
                Speciality can't be empty
              </label>
            ) : (
              ""
            )}

            <button
              type="submit"
              className="bg-[#06B6D4] w-24 h-10 rounded text-lg cursor-pointer mx-auto mt-2"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CoachSignup;
