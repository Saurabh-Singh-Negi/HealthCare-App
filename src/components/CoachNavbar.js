import React from "react";
import { Link } from "react-router-dom";


const CoachNavabar = () => {
  return (
    <>
    <div className="text-center">
      <nav className="flex flex-col sm:flex-row justify-between bg-[#111] text-white p-1 sm:p-4">
        <Link to="/">
          <h1 className="font-bold text-xl cursor-pointer">WeCare</h1>
        </Link>

        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <Link to="/coachviewprofile">View Profile</Link>
          <Link to="/coachdashboard">My Schedule</Link>
          <p>Call Us: 123 123434443</p>
          <Link to="/coachlogin">Logout</Link>
        </div>
      </nav>
      </div>
      
    </>
  );
};

export default CoachNavabar;
