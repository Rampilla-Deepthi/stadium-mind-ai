import React from 'react';
import { 
  ShieldAlert, 
  Zap, 
  Users, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  Eye, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const OrganizerDashboard = () => {
  // Realistic FIFA 2026 Operational Data
  const sectorData = [
    { name: 'North Stand', occupancy: '94%', status: 'Critical', color: 'text-rose-500' },
    { name: 'South Stand', occupancy: '82%', status: 'Stable', color: 'text-emerald-500' },
    { name: 'East VIP', occupancy: '65%', status: 'Normal', color: 'text-indigo-500' },
    { name: 'West Press', occupancy: '88%', status: 'Warning', color: 'text-amber-500' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* 1. Header Section - Mission Control Style */}
      <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">System Operational</span>
            </div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">
              Organizer <span className="text-indigo-500">Command Center</span>
            </h1>
            <p className="text-slate-400 mt-1 font-medium">
              FIFA World Cup 2026 • MetLife Stadium • Ops Portal v1.0.4
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-slate-700">
              Export Logs
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/20">
              System Reboot
            </button>
          </div>
        </div>
        <Activity className="absolute right-[-20px] top-[-20px] text-white/5" size={240} />
      </div>

      {/* 2. KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Attendance', val: '82,340', sub: '96% Capacity', icon: Users, color: 'text-slate-600', bg: 'bg-indigo-50' },
          { label: 'Active Alerts', val: '07', sub: '2 High Priority', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50' },
          { label: 'Security Status', val: 'SECURE', sub: 'All Gates Clear', icon: ShieldAlert, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'AI Confidence', val: '96.4%', sub: 'Gemini 1.5 Pro', icon: Zap, color: 'text-indigo-600', bg: 'bg-slate-100' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2.5 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={22} />
              </div>
              <ArrowUpRight size={16} className="text-slate-300" />
            </div>
            <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest leading-none">
              {stat.label}
            </h3>
            <p className={`text-3xl font-black mt-2 tracking-tighter ${stat.color === 'text-slate-600' ? 'text-slate-900' : stat.color}`}>
              {stat.val}
            </p>
            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase italic">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* 3. Main Operational Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Gemini Operations Brain */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h2 className="text-sm font-black uppercase italic tracking-widest text-slate-800 flex items-center gap-2">
              <Zap size={18} className="text-indigo-600" /> Gemini Operations Brain
            </h2>
            <div className="flex items-center gap-1.5 bg-indigo-50 px-3 py-1 rounded-full">
              <span className="text-[10px] font-bold text-indigo-600 uppercase">Live Prediction</span>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="bg-slate-950 text-white p-6 rounded-3xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <TrendingUp size={14} /> AI Recommendation #42-B
                </p>
                <p className="text-lg font-medium leading-relaxed">
                  "Crowd congestion predicted near <span className="text-white font-bold underline decoration-indigo-500 underline-offset-4">Gate C</span> in the next 
                  15 minutes. Deploy 4 additional staff members to Sector 2 and 
                  redirect spectators through Gate D to balance throughput."
                </p>
                <div className="mt-6 flex gap-3">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase transition-all">
                    Execute Redirect
                  </button>
                  <button className="bg-slate-800 text-slate-400 px-5 py-2.5 rounded-xl text-xs font-black uppercase">
                    Ignore
                  </button>
                </div>
              </div>
              <Zap className="absolute right-[-10px] bottom-[-10px] text-white/5" size={150} />
            </div>

            {/* Sector Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectorData.map((sector) => (
                <div key={sector.name} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter">{sector.name}</p>
                    <p className="text-2xl font-black text-slate-900">{sector.occupancy}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black uppercase ${sector.color}`}>{sector.status}</span>
                    <div className="w-16 h-1.5 bg-slate-200 rounded-full mt-1 overflow-hidden">
                      <div 
                        className={`h-full ${sector.status === 'Critical' ? 'bg-rose-500' : 'bg-indigo-500'}`} 
                        style={{ width: sector.occupancy }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Alerts Panel */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 flex flex-col">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h2 className="text-sm font-black uppercase italic tracking-widest text-slate-800 flex items-center gap-2">
              <ShieldAlert size={18} className="text-rose-600" /> Live Alert Log
            </h2>
          </div>
          <div className="p-4 space-y-3 overflow-y-auto max-h-[500px]">
            {[
              { type: 'Medical', loc: 'Sec 104', time: '2m ago', active: true },
              { type: 'Security', loc: 'Gate C', time: '14m ago', active: false },
              { type: 'Maintenance', loc: 'Concourse B', time: '18m ago', active: false },
              { type: 'System', loc: 'API-Relay', time: '25m ago', active: false },
            ].map((alert, i) => (
              <div key={i} className={`p-4 rounded-2xl border transition-all cursor-pointer ${alert.active ? 'bg-rose-50 border-rose-100' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {alert.active ? (
                      <div className="h-2 w-2 bg-rose-500 rounded-full animate-ping" />
                    ) : (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    )}
                    <p className={`text-xs font-black uppercase tracking-tight ${alert.active ? 'text-rose-700' : 'text-slate-700'}`}>
                      {alert.type} Alert
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{alert.time}</span>
                </div>
                <p className="text-sm font-bold text-slate-900 mt-2">{alert.loc} Requesting Support</p>
                {alert.active && (
                  <button className="mt-3 w-full py-2 bg-rose-600 text-white text-[10px] font-black uppercase rounded-lg">
                    Acknowledge
                  </button>
                )}
              </div>
            ))}
          </div>
          <button className="mt-auto p-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">
            View All Incident History
          </button>
        </div>

      </div>

      {/* 4. Monitoring Grid Section */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-black text-slate-900 uppercase italic tracking-widest flex items-center gap-2">
            <Eye size={18} className="text-indigo-600" /> Sector Visuals
          </h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full uppercase italic tracking-widest">Feed: Live</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase italic tracking-widest tracking-widest">Feed: Thermal</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-32">
          {[1, 2, 3, 4].map((cam) => (
            <div key={cam} className="bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 group hover:border-indigo-300 transition-all cursor-pointer">
              <div className="text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase group-hover:text-indigo-500 transition-colors tracking-widest">CAM-0{cam}</p>
                <div className="flex justify-center mt-1">
                  <Activity size={16} className="text-slate-200 group-hover:text-indigo-200 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OrganizerDashboard;