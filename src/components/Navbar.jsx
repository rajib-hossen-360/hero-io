import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="font-bold text-xl text-gray-900">Hero IO</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-medium text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600 transition"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600 transition"
            }
          >
            Installation
          </NavLink>
        </div>

        {/* Contribution Button */}
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Contribution
        </a>
      </div>
    </nav>
  );
};

export default Navbar;