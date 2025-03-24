import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">DLab Clothing</h1>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/about" className="hover:text-red-500">About Us</Link>
        <Link to="/contact" className="hover:text-red-500">Contact</Link>
      </div>
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
