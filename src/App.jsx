import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apps from './pages/Apps';

// Temporary placeholder components for remaining routes
const AppDetails = () => <div className="min-h-[60vh] p-8 text-center text-xl">App Details Page (Coming Soon)</div>;
const Installation = () => <div className="min-h-[60vh] p-8 text-center text-xl">Installation Page (Coming Soon)</div>;
const NotFound = () => <div className="min-h-[60vh] p-8 text-center text-xl font-bold text-red-500">404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;