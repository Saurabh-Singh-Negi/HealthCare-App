import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CoachLogin = () => {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const [error, setError] = useState();
  const [status, setStatus] = useState();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  function HandleSubmit(event) {
    event.preventDefault();
    if (id.length == 0 || pwd.length < 5 || pwd.length > 10) {
      setError(true);
    }

    if (!(id.length == 0 || pwd.length < 5 || pwd.length > 10)) {
      axios
        .get("https://wecare-api-qqg2.onrender.com/coaches" + "?id=" + id + "&password=" + pwd)
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setStatus(false);
            sessionStorage.setItem("id", id);
            navigate("/coachdashboard");
          } else setStatus(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
        <Navbar />

        <div className="flex flex-col gap-4 justify-center items-center mx-auto w-5/6 sm:w-[500px] h-[250px] bg-[#000] text-white text-lg text-center rounded-lg">
          <div>
            <h1 className="sm:text-3xl">Login As Life Coach</h1>
          </div>
          <div>
            <form className="flex flex-col gap-2 items-center">
              <input
                type="text"
                onChange={(event) => {
                  setId(event.target.value);
                }}
                className="rounded w-48 sm:w-64 h-10 text-black p-1 block"
                placeholder="Coach id"
              />
              {error && id.length == 0 ? (
                <label className="block text-red-600">
                  Coach id is required
                </label>
              ) : (
                ""
              )}

              <input
                type="password"
                onChange={(event) => {
                  setPwd(event.target.value);
                }}
                className="rounded w-48 sm:w-64 h-10  text-black p-1 block"
                placeholder="Password"
              />
              {error && (pwd.length < 5 || pwd.length > 10) ? (
                <label className="block text-red-600">
                  Password should have 5 to 10 characters
                </label>
              ) : (
                ""
              )}

              <button
                type="submit"
                onClick={HandleSubmit}
                className="bg-[#06B6D4] w-24 h-10 rounded text-lg cursor-pointer"
              >
                Login
              </button>
              {status ? <label>Invalid Credentials</label> : ""}

              {status == false ? <label>Logged In</label> : ""}
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CoachLogin;
