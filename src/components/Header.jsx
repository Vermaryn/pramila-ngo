import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaXmark,
  FaEnvelope,
  FaPhone,
  FaBars,
} from "react-icons/fa6";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-lg font-[Poppins] relative bg-white">

      <div className="text-gray-700 text-sm py-2 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col nav:flex-row nav:justify-end items-center gap-2 nav:gap-6 px-4 font-montserrat text-lg">
          <a
            href="mailto:pehalekasha@gmail.com"
            className="flex items-center gap-1"
          >
            <FaEnvelope /> pramilaekasha
          </a>
          <a href="tel:1800-425-8622" className="flex items-center gap-1">
            <FaPhone /> +91 8191019111
          </a>
        </div>
      </div>

      <nav className="flex items-center justify-between px-10 py-3 font-pacifico text-xl relative flex-wrap">

        <Link to="/" className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dxbpf3dge/image/upload/v1770746185/logo_fmm8tv.png" alt="Logo" className="h-20 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-pacifico text-green-700">Pramila</span>
            <span className="text-sm text-gray-600 tracking-wide">Ek Asha</span>
          </div>
        </Link>


        <ul className="hidden nav:flex space-x-6 mx-auto font-pacifico">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Who We Are
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              What We Do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              News & Stories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `hover:text-blue-500 transition ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Admin panel
            </NavLink>
          </li>
        </ul>

        {/* Right: Donate button */}
        <Link
          to="/donate"
          className="hidden nav:block bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
        >
          Donate
        </Link>


        <button
          className="nav:hidden text-2xl relative"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>


        <div
          className={`absolute top-full left-0 w-full z-50 bg-white shadow-md flex flex-col items-center py-4 nav:hidden space-y-3 transition-all duration-500 ease-in-out ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className="hover:text-blue-500 transition"
          >
            Who We Are
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/services"
            className="hover:text-blue-500 transition"
          >
            What We Do
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/news"
            className="hover:text-blue-500 transition"
          >
            News & Stories
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/blogs"
            className="hover:text-blue-500 transition"
          >
            Blogs
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className="hover:text-blue-500 transition"
          >
            Contact Us
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/admin/login"
            className="hover:text-blue-500 transition"
          >
            Admin Panel
          </NavLink>
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
