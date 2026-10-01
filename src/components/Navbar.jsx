import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = "text-purple-600 font-semibold border-b-2 border-purple-600 pb-1";
  const defaultStyle = "text-slate-600 hover:text-purple-600 font-medium transition pb-1";

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-purple-600 tracking-tight">
          Hero <span className="text-slate-900">IO</span>
        </Link>

        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          >
            Installation
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;