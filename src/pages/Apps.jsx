import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import appsData from '../data/appsData.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Apps = () => {
  useDocumentTitle('Explore All Applications');

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('downloads');

  const filteredApps = useMemo(() => {
    return appsData
      .filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === 'downloads') {
          return b.downloads - a.downloads;
        } else if (sortBy === 'rating') {
          return b.ratingAvg - a.ratingAvg;
        }
        return 0;
      });
  }, [searchTerm, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">All Applications</h1>
          <p className="text-slate-500 mt-1">
            Showing <span className="font-semibold text-purple-600">{filteredApps.length}</span> apps
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-64"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
          >
            <option value="downloads">Sort by Downloads</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
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
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
          <p className="text-slate-500 text-lg font-medium">No apps found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Apps;