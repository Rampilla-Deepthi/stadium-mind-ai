import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Navigation, 
  Users, 
  Languages, 
  ShoppingBag, 
  BrainCircuit, 
  BellRing, 
  BarChart3, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-react';

/**
 * Sidebar component for StadiumMind AI
 * Implements a dark mission-control theme with role-based navigation.
 */
const Sidebar = ({ role, isOpen }) => {
  
  // Navigation mapping for Fan Role
  const fanLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/fan' },
    { name: 'Smart Navigation', icon: Navigation, path: '#' },
    { name: 'Crowd Status', icon: Users, path: '#' },
    { name: 'Translator', icon: Languages, path: '#' },
    { name: 'Food & Stores', icon: ShoppingBag, path: '#' },
  ];

  // Navigation mapping for Organizer Role
  const organizerLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/organizer' },
    { name: 'Crowd Monitoring', icon: Users, path: '#' },
    { name: 'Operations Brain', icon: BrainCircuit, path: '#', highlight: true },
    { name: 'Alerts', icon: BellRing, path: '#' },
    { name: 'Analytics', icon: BarChart3, path: '#' },
  ];

  const menuItems = role === 'Organizer' ? organizerLinks : fanLinks;

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-950 border-r border-slate-900 
        transition-transform duration-300 ease-in-out transform shadow-2xl
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex flex-col h-full">
        {/* Role Identity Section */}
        <div className="p-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1">
              Portal Mode
            </p>
            <h2 className="text-white font-bold tracking-tight italic uppercase italic">
              {role} <span className="text-slate-600 font-normal">Command</span>
            </h2>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
  key={item.name}
  to={item.path}
  className={`
                flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all group
                ${item.highlight 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'}
              `}
            >
              <item.icon 
                size={20} 
                className={item.highlight ? 'animate-pulse' : 'group-hover:text-indigo-500 transition-colors'} 
              />
              <span className="tracking-tight uppercase italic">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* System & Utility Section */}
        <div className="p-4 mt-auto border-t border-slate-900 space-y-1">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-900 hover:text-slate-200 transition-all">
            <Settings size={20} />
            <span className="tracking-tight uppercase">Settings</span>
          </button>
          
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-bold text-sm text-rose-500 hover:bg-rose-500/10 transition-all">
            <LogOut size={20} />
            <span className="tracking-tight uppercase">Logout</span>
          </button>

          {/* AI Status Badge */}
          <div className="mt-4 p-4 bg-indigo-950/20 border border-indigo-900/30 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-indigo-500 fill-indigo-500" />
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                AI Engine Active
              </span>
            </div>
            <p className="text-[10px] text-slate-600 leading-tight">
              Gemini 1.5 Pro processing real-time stadium telemetry.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;