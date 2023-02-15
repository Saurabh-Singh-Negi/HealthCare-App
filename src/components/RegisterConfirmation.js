import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-[#CAD5E2] w-full">
        <Navbar />
        <div className="bg-[#CAD5E2] flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl sm:text-5xl font-bold">
            Profile created successfully
          </h1>
          {location.state.action == "coach" ? (
            <div>
              <h1 className="text-lg sm:text-2xl">
                coach id is: {location.state.coachId}
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="text-lg sm:text-2xl">
                User id is: {location.state.userId}
              </h1>
            </div>
          )}
          <button
            onClick={() => navigate("/")}
            className="bg-[#06B6D4] w-24 h-10 rounded text-lg cursor-pointer text-white font-semibold"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RegisterConfirmation;
