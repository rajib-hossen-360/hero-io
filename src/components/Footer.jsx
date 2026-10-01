import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="font-bold text-xl text-white">Hero IO</span>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hero IO. All rights reserved. Built for productive developers.
        </p>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/apps" className="hover:text-white transition">Apps</Link>
          <Link to="/installation" className="hover:text-white transition">Installation</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;