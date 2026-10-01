import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import appsData from '../data/appsData.json';
import { getInstalledAppIds, removeInstalledApp } from '../utils/localStorage';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState('downloads');

  useEffect(() => {
    const ids = getInstalledAppIds();
    const apps = appsData.filter((app) => ids.includes(app.id));
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id, title) => {
    removeInstalledApp(id);
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
    toast.info(`${title} has been uninstalled!`);
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === 'downloads') return b.downloads - a.downloads;
    if (sortBy === 'size') return b.size - a.size;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Installed Applications</h1>
          <p className="text-slate-500 mt-1">
            Total Installed: <span className="font-semibold text-purple-600">{installedApps.length}</span> apps
          </p>
        </div>

        {installedApps.length > 0 && (
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white"
          >
            <option value="downloads">Sort by Downloads</option>
            <option value="size">Sort by Size</option>
          </select>
        )}
      </div>

      {sortedApps.length > 0 ? (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{app.title}</h3>
                  <p className="text-xs text-slate-500">{app.companyName}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
                    <span>⭐ {app.ratingAvg}</span>
                    <span>📦 {app.size} MB</span>
                    <span>⬇️ {(app.downloads / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <Link
                  to={`/apps/${app.id}`}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 space-y-4">
          <p className="text-slate-500 text-lg font-medium">No applications installed currently.</p>
          <Link
            to="/apps"
            className="inline-block bg-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-purple-700 transition"
          >
            Explore Apps
          </Link>
        </div>
      )}
    </div>
  );
};

export default Installation;