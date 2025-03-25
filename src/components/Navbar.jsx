import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent text-white p-4 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="TLab Clothing Logo" className="h-10" />
      </Link>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-red-500">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-red-500">
          Contact
        </Link>
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
