import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import appsData from '../data/appsData.json';

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((item) => item.id === parseInt(id));

  const [isInstalled, setIsInstalled] = useState(false);

  if (!app) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">App not found!</h2>
        <Link to="/apps" className="text-purple-600 underline mt-4 inline-block">
          Back to All Apps
        </Link>
      </div>
    );
  }

  const handleInstall = () => {
    setIsInstalled(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Button */}
      <Link to="/apps" className="text-sm font-medium text-purple-600 hover:underline">
        &larr; Back to Apps
      </Link>

      {/* App Header Section */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <img
            src={app.image}
            alt={app.title}
            className="w-28 h-28 object-cover rounded-2xl shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{app.title}</h1>
            <p className="text-slate-500 font-medium mt-1">{app.companyName}</p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-sm text-slate-600">
              <span>⭐ <strong className="text-slate-900">{app.ratingAvg}</strong> ({app.reviews.toLocaleString()} reviews)</span>
              <span>⬇️ <strong className="text-slate-900">{(app.downloads / 1000000).toFixed(1)}M</strong> Downloads</span>
              <span>📦 <strong className="text-slate-900">{app.size} MB</strong></span>
            </div>
          </div>
        </div>

        <button
          onClick={handleInstall}
          disabled={isInstalled}
          className={`px-8 py-3 rounded-xl font-semibold text-white transition shadow-lg ${
            isInstalled
              ? 'bg-emerald-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isInstalled ? 'Installed' : `Install (${app.size} MB)`}
        </button>
      </div>

      {/* Description & Rating Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Description */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">About this app</h2>
          <p className="text-slate-600 leading-relaxed">{app.description}</p>
        </div>

        {/* Rating Breakdown Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Ratings Breakdown</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={app.ratings} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={60} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;