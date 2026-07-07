import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    { title: 'Smart Crowd Flow', desc: 'Real-time AI monitoring of stadium gates and concourses.', icon: Users },
    { title: 'AI Concierge', icon: Zap, desc: 'Personalized assistant for travel, seating, and food.' },
    { title: 'Unified Command', icon: ShieldCheck, desc: 'Complete operational oversight for organizers.' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-indigo-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <Globe size={800} className="mx-auto" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-sm font-bold tracking-widest uppercase mb-8">
            <Zap size={16} /> Official GenAI Platform
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic uppercase">
            StadiumMind <span className="text-indigo-500">AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Revolutionizing the <span className="text-white font-bold">FIFA World Cup 2026</span> experience. 
            Real-time intelligence for fans, organizers, and staff.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => navigate('/fan')}
              className="group bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
            >
              Enter Fan Dashboard <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/organizer')}
              className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
            >
              Organizer Command
            </button>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-6 py-24 border-t border-slate-800">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;