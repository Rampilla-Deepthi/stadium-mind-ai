import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import RoleLayout from './components/layout/RoleLayout';

// Pages
import LandingPage from './features/landing/LandingPage';
import FanDashboard from './features/fan/FanDashboard';
import OrganizerDashboard from './features/organizer/OrganizerDashboard';

/**
 * StadiumMind AI Main Router
 * 
 * Routes:
 * /          -> Public Landing Page (Role Selection)
 * /fan       -> Fan-specific AI Dashboard
 * /organizer -> Organizer-specific Command Center
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Entry Point */}
        <Route path="/" element={<LandingPage />} />

        {/* Fan Experience - Wrapped in Role-based Layout */}
        <Route path="/fan" element={<RoleLayout role="Fan" />}>
          <Route index element={<FanDashboard />} />
        </Route>

        {/* Organizer Experience - Wrapped in Role-based Layout */}
        <Route path="/organizer" element={<RoleLayout role="Organizer" />}>
          <Route index element={<OrganizerDashboard />} />
        </Route>

        {/* Fallback for undefined routes */}
        <Route 
          path="*" 
          element={
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
