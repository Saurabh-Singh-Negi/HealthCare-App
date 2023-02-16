import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import user from "../images/user.svg";
import CoachNavbar from "./CoachNavbar";
import Footer from "./Footer";

const Coachviewprofile = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const coachId = sessionStorage.getItem("id");
    if (coachId == "" || coachId == null) {
      navigate("/");
    } else {
      setId(coachId);
      setStatus(true);
    }
    axios
      .get("http://localhost:3000/coaches/?id=" + coachId)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
      <CoachNavbar />

        <div className=' mx-auto'>
        {data.map((ele) => {
          return (
            <div
              key={data.coachId}
              className="flex flex-col sm:flex-row rounded-lg font-semibold text-white bg-black items-center justify-center my-4 w-[250px] sm:w-[500px] border-2 border-red-600 cursor-pointer">
              <div>
                <img src={user} className="w-[200px]" alt="this is image" />
              </div>
              <ul className="flex flex-col">
                <li>Coach Id: {ele.id}</li>
                <li>Date of birth: {ele.dateOfBirth}</li>
                <li>Mobile No. {ele.mobileNumber}</li>
                <li>Speciality: {ele.speciality}</li>
              </ul>
            </div>
          );
        })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Coachviewprofile;
