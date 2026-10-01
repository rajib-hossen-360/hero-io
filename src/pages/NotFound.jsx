import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <div className="text-8xl font-extrabold text-purple-600">404</div>
      <h1 className="text-3xl font-bold text-slate-900">Oops! Page Not Found</h1>
      <p className="text-slate-500 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition shadow-lg inline-block"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;