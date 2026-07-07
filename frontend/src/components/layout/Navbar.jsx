import React from 'react';
import { Menu, Bell, Globe, User, ShieldCheck, Zap } from 'lucide-react';

/**
 * Navbar component for StadiumMind AI
 * Features a dark modern FIFA World Cup 2026 theme
 * 
 * @param {string} role - The current user role (Fan, Organizer, etc.)
 * @param {function} toggleSidebar - Function to handle mobile menu visibility
 */
const Navbar = ({ role, toggleSidebar }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950 border-b border-slate-800 text-white h-16 px-4 flex items-center justify-between shadow-2xl">
      
      {/* Left Section: Mobile Menu & Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-900 transition-colors text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle Navigation Menu"
        >
          <Menu size={24} />
        </button>

        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg shadow-indigo-600/30 group-hover:scale-110 transition-transform duration-300">
            <Globe size={20} className="text-white" />
          </div>
          <span className="text-xl font-black italic uppercase tracking-tighter select-none">
            StadiumMind <span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">AI</span>
          </span>
        </div>
      </div>

      {/* Right Section: Role Badge, Notifications & Profile */}
      <div className="flex items-center gap-2 md:gap-5">
        
        {/* Role Badge (Desktop) */}
        <div className="hidden sm:flex flex-col items-end px-4 py-1 border-r border-slate-800">
          <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] leading-none mb-1">
            Access Verified
          </span>
          <div className="flex items-center gap-1.5">
            {role === 'Organizer' ? (
              <ShieldCheck size={14} className="text-emerald-400" />
            ) : (
              <Zap size={14} className="text-amber-400" />
            )}
            <span className="text-xs font-bold text-slate-200 uppercase tracking-tighter italic">
              {role || 'Guest'}
            </span>
          </div>
        </div>

        {/* Global System Status (Mobile/Small Desktop) */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-full">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live: NYC_NJ_PORTAL</span>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {/* Notification Button */}
          <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all duration-200 group">
            <Bell size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-600 rounded-full border-2 border-slate-950 ring-1 ring-rose-500/50"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="h-9 w-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-indigo-500 transition-all duration-300 overflow-hidden shadow-inner">
              <User size={18} className="text-slate-500 group-hover:text-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;