import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#111] text-white p-4">
        <Link to="/"><h1 className="font-bold text-xl cursor-pointer">WeCare</h1></Link>
        <p>Call Us: 123 123434443</p>
    </nav>
  )
}

export default Navbar;