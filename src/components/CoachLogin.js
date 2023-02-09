import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const CoachLogin = () => {

    useEffect(() => {
        sessionStorage.clear();
    },[]);

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
        .get("http://localhost:3000/coaches" + "?id=" + id + "&password=" + pwd)
        .then((res) => {
          console.log(res.data);
          if(res.data.length>0) {
            setStatus(false);
            sessionStorage.setItem("id", id);
            navigate("/coachdashboard");
        }
          else setStatus(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <>
      <nav className="flex justify-between bg-[#111] text-white p-4">
        <Link to="/"><h1 className="font-bold text-xl cursor-pointer">WeCare</h1></Link>
        <p>Call Us: 123 123434443</p>
      </nav>

      <div className="border-2 border-black w-1/6 mx-auto mt-2">
        <div>
          <h1>Login As Life Coach</h1>
        </div>

        <form>
          <input
            type="text"
            onChange={(event) => {
              setId(event.target.value);
            }}
            className="border-2 border-black block"
            placeholder="Coach id"
          />
          {error && id.length == 0 ? (
            <label className="block text-red-600">Coach id is required</label>
          ) : (
            ""
          )}

          <input
            type="password"
            onChange={(event) => {
              setPwd(event.target.value);
            }}
            className="border-2 border-black block"
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
            className="border-2 border-black block cursor-pointer"
          >
            Login
          </button>
          {status?
          <label>Invalid Credentials</label>:""}
          
          {status==false?
          <label>Logged In</label>:""}

          
        </form>
      </div>
    </>
  );
};

export default CoachLogin;
