import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-black py-4 px-8 flex justify-between items-center shadow-md">
      <div className="navbar-brand text-2xl font-bold text-white">
        <Link to="/">Movie app</Link>
      </div>
      <div className="navbar-links flex gap-8">
        <Link to="/" className="nav-link text-white text-lg py-2 px-4 rounded hover:text-blue-500 hover:bg-opacity-10 transition">
          Home
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
