import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const RoleLayout = ({ role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <Sidebar role={role} isOpen={isSidebarOpen} />

      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar role={role} toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* The individual pages (FanDashboard, OrganizerDashboard, etc.) render here */}
            <Outlet />
          </div>
        </main>

        {/* Footer / Copyright Area */}
        <footer className="p-6 text-center text-slate-400 text-xs border-t border-slate-200">
          &copy; 2026 FIFA World Cup™ GenAI Platform • StadiumMind AI v1.0.4
        </footer>
      </div>
    </div>
  );
};

export default RoleLayout;