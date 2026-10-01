import { Link } from 'react-router-dom';
import appsData from '../data/appsData.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Home - Productive Apps Marketplace');

  const trendingApps = appsData.slice(0, 8);

  return (
    <div className="space-y-16 pb-16">
      {/* Banner Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            We Build <span className="text-purple-600">Productive</span> Apps
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            At Hero IO, we design high-performance tools that empower developers, creators, and teams to build faster and smarter.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition shadow-lg"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition shadow-lg"
            >
              Play Store
            </a>
          </div>

          <div className="pt-8 max-w-sm mx-auto">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600"
              alt="App Mobile Mockup"
              className="rounded-2xl shadow-2xl border-4 border-white mx-auto object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-purple-600 text-white rounded-2xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-extrabold">29.6M</h2>
            <p className="text-purple-200 font-medium mt-1">Total Downloads</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">908K</h2>
            <p className="text-purple-200 font-medium mt-1">Active Users</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">132+</h2>
            <p className="text-purple-200 font-medium mt-1">Published Apps</p>
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Trending Apps</h2>
            <p className="text-slate-500 mt-1">Explore our most popular applications</p>
          </div>
          <Link
            to="/apps"
            className="text-purple-600 font-semibold hover:text-purple-700 transition"
          >
            Show All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingApps.map((app) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-36 object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{app.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{app.companyName}</p>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600 border-t pt-3">
                <span>⭐ {app.ratingAvg}</span>
                <span>⬇️ {(app.downloads / 1000000).toFixed(1)}M</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;