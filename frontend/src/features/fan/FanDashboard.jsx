import React from 'react';
import { 
  Users, 
  MapPin, 
  Navigation, 
  Clock, 
  Sparkles, 
  ShoppingBag, 
  Utensils, 
  Wind, 
  ChevronRight,
  Info
} from 'lucide-react';

const FanDashboard = () => {
  // Realistic FIFA 2026 Mock Data
  const crowdData = [
    { zone: 'Gate A (Main)', level: 'Low', color: 'bg-emerald-500', text: 'text-emerald-600' },
    { zone: 'North Concourse', level: 'Medium', color: 'bg-amber-500', text: 'text-amber-600' },
    { zone: 'Food Court West', level: 'High', color: 'bg-rose-500', text: 'text-rose-600' },
  ];

  const nearbyStores = [
    { name: 'Liberty Burgers', type: 'Food', icon: Utensils, dist: '120m' },
    { name: 'FIFA Official Store', type: 'Merch', icon: ShoppingBag, dist: '350m' },
    { name: 'Main Restrooms', type: 'Facility', icon: Wind, dist: '45m' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">
            Welcome, <span className="text-indigo-600">Football Fan!</span>
          </h1>
          <div className="flex items-center gap-2 mt-1 text-slate-500 font-medium">
            <MapPin size={16} className="text-indigo-500" />
            <span>MetLife Stadium • East Rutherford, NJ</span>
          </div>
        </div>
        <div className="bg-white border border-slate-200 px-4 py-2 rounded-2xl shadow-sm flex items-center gap-3">
          <div className="h-2 w-2 bg-rose-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
            LIVE: USA vs ENGLAND (1-0)
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Crowd Density Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-black text-slate-900 uppercase italic tracking-wider flex items-center gap-2 text-sm">
              <Users size={18} className="text-indigo-600" /> Crowd Density
            </h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sensors Live</span>
          </div>
          <div className="space-y-4">
            {crowdData.map((item) => (
              <div key={item.zone} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-700">{item.zone}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-black uppercase ${item.text}`}>{item.level}</span>
                  <div className={`h-2 w-8 rounded-full ${item.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Smart Navigation Card */}
        <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-200 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="font-black italic uppercase tracking-wider flex items-center gap-2 text-sm mb-4">
              <Navigation size={18} /> Smart Navigation
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-widest">Current Route</p>
                <p className="text-lg font-bold">Sec 102 → Gate B</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-widest">Est. Time</p>
                  <p className="text-xl font-black italic">6 MINS</p>
                </div>
                <div className="h-8 w-px bg-indigo-500" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-widest">AI Recommendation</p>
                  <p className="text-[11px] font-medium leading-tight">Use West corridor to avoid halftone rush.</p>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-white text-indigo-600 w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-50 transition-colors">
              Start Guidance
            </button>
          </div>
          <Navigation size={120} className="absolute right-[-30px] bottom-[-30px] text-white/10 rotate-12" />
        </div>

        {/* 3. Nearby Stores Card */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-black text-slate-900 uppercase italic tracking-wider flex items-center gap-2 text-sm mb-6">
            <ShoppingBag size={18} className="text-indigo-600" /> Nearby Amenities
          </h3>
          <div className="space-y-3">
            {nearbyStores.map((store) => (
              <div key={store.name} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <store.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{store.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-medium">{store.type} • {store.dist}</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 4. AI Match Assistant Card */}
        <div className="bg-slate-950 rounded-3xl p-8 text-white flex flex-col border border-slate-800 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="bg-indigo-600 p-2 rounded-xl">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest leading-none">StadiumMind AI</h3>
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Powered by Gemini</span>
            </div>
          </div>

          <div className="space-y-4 flex-1 relative z-10">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-tl-none self-start max-w-[90%]">
              <p className="text-xs text-slate-400 mb-1 font-bold">You</p>
              <p className="text-sm">What's the best way to get to the train station after the game?</p>
            </div>
            
            <div className="bg-indigo-600/10 border border-indigo-500/20 p-5 rounded-2xl rounded-tr-none self-end max-w-[90%]">
              <p className="text-xs text-indigo-400 mb-1 font-bold">StadiumMind AI</p>
              <p className="text-sm leading-relaxed text-slate-200">
                Based on current traffic, I recommend exiting via **Gate B**. A dedicated shuttle fleet is waiting at the North Lot. It’s a 4-minute walk, and the next train departs in **22 minutes**.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-900 rounded-2xl p-2 flex items-center border border-slate-800 relative z-10">
            <input 
              type="text" 
              placeholder="Ask about tickets, food, or navigation..." 
              className="bg-transparent border-none focus:ring-0 text-xs flex-1 px-3 outline-none"
            />
            <button className="bg-indigo-600 p-2 rounded-xl hover:bg-indigo-500 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
          
          <Sparkles size={180} className="absolute right-[-40px] top-[-40px] text-white/5" />
        </div>

        {/* 5. Stadium Map Placeholder */}
        <div className="bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:border-indigo-400 transition-all">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-white p-6 rounded-full shadow-lg text-slate-300 group-hover:text-indigo-600 transition-colors">
              <MapPin size={48} />
            </div>
          </div>
          <h3 className="text-xl font-black italic uppercase text-slate-700 tracking-tighter">
            Interactive Stadium Map
          </h3>
          <p className="text-xs text-slate-500 max-w-xs mt-2 font-medium">
            Tap to explore seating, real-time gate congestion, and amenities across all 3 levels.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 shadow-sm">Level 1</span>
            <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 shadow-sm">Level 2</span>
            <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 shadow-sm">Concourse</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FanDashboard;