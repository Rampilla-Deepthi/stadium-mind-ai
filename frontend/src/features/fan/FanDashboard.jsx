import React, { useState, useRef, useEffect } from 'react';
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

  const [message, setMessage] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
const [destination, setDestination] = useState('');
const [routeResult, setRouteResult] = useState(null);

const [chatMessages, setChatMessages] = useState([
  {
    sender: 'ai',
    text: 'Welcome to StadiumMind AI. Ask me about navigation, food, tickets, or crowd conditions.'
  }
]);
const messagesEndRef = useRef(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: 'smooth'
  });
}, [chatMessages]);

const handleSend = () => {
  if (!message.trim()) return;

  const userMessage = {
    sender: 'user',
    text: message
  };

  let response = '';

  if (message.toLowerCase().includes('gate')) {
    response =
      'Gate B is 120 meters east of your current location. Estimated walking time: 2 minutes.';
  }
  else if (message.toLowerCase().includes('food')) {
    response =
      'The nearest food court is Food Plaza A near Section 102.';
  }
  else if (message.toLowerCase().includes('crowd')) {
    response =
      'Current crowd density is moderate. Gate C is less crowded.';
  }
  else if (
    message.toLowerCase().includes('match') ||
    message.toLowerCase().includes('game')
  ) {
    response =
      'Today: Argentina vs Brazil at 7:00 PM. Stadium occupancy is currently 82%. Gates open until 6:30 PM.';
  }
  else if (
    message.toLowerCase().includes('team') ||
    message.toLowerCase().includes('player')
  ) {
    response =
      'Both teams have arrived at the stadium. Lineups will be announced 1 hour before kickoff.';
  }
  else if (
    message.toLowerCase().includes('transport') ||
    message.toLowerCase().includes('train') ||
    message.toLowerCase().includes('bus')
  ) {
    response =
      'The nearest metro station is 500m from Gate A. Extra buses will operate after the match.';
  }
  else if (
    message.toLowerCase().includes('emergency') ||
    message.toLowerCase().includes('help')
  ) {
    response =
      'For emergencies, contact the nearest volunteer or proceed to the medical center near Section 110.';
  }
  else if (
    message.toLowerCase().includes('crowded') ||
    message.toLowerCase().includes('reroute') ||
    message.toLowerCase().includes('alert')
  ) {
    response =
      '⚠️ Crowd Alert: Gate B is currently experiencing high congestion. StadiumMind AI recommends rerouting through Gate D. Estimated delay reduced from 12 minutes to 3 minutes.';
  }
  else if (
    message.toLowerCase().includes('wheelchair') ||
    message.toLowerCase().includes('accessible') ||
    message.toLowerCase().includes('disability') ||
    message.toLowerCase().includes('vision')
  ) {
    response =
      'Accessibility Assistance: The nearest wheelchair-accessible entrance is Gate A. Audio navigation support is available, and volunteers are stationed at all accessibility points.';
  }
  else if (
    message.toLowerCase().includes('ticket') ||
    message.toLowerCase().includes('seat')
  ) {
    response =
      'Your ticket is valid. Seat A-24 is located in Section 105. Estimated walking time from Gate A: 4 minutes.';
  }
  else if (
    message.toLowerCase().includes('weather') ||
    message.toLowerCase().includes('rain')
  ) {
    response =
      'Current weather: 28°C, partly cloudy. No delays expected. Carry water and arrive 30 minutes before kickoff.';
  }
  else if (
    message.toLowerCase().includes('spanish') ||
    message.toLowerCase().includes('hindi') ||
    message.toLowerCase().includes('french') ||
    message.toLowerCase().includes('translate')
  ) {
    response =
      'Translation Service: Welcome to StadiumMind AI. ¿Cómo puedo ayudarte hoy? | Comment puis-je vous aider aujourd’hui ? | मैं आपकी सहायता कैसे कर सकता हूँ?';
  }
  else {
    response =
      'I can help with navigation, crowd alerts, food courts, accessibility services, transport information, match schedules, tickets, and stadium facilities.';
  }

  setChatMessages([
    ...chatMessages,
    userMessage,
    {
      sender: 'ai',
      text: 'Thinking...'
    }
  ]);

  setMessage('');

  setTimeout(() => {
    setChatMessages(prev => [
      ...prev.slice(0, -1),
      {
        sender: 'ai',
        text: response
      }
    ]);
  }, 1000);
};
const handleRoute = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/navigation");
    const data = await res.json();

    setRouteResult({
      route: data.route,
      time: data.time,
      recommendation: data.recommendation
    });
  } catch (error) {
    setRouteResult({
      route: `${currentLocation} → Gate D → ${destination}`,
      time: "3 mins",
      recommendation:
        "AI Recommendation: Use Gate D to avoid congestion."
    });
  }
};
const simulateCrowdUpdate = () => {
  const levels = [
    {
      level: 'Low',
      color: 'bg-emerald-500',
      text: 'text-emerald-600'
    },
    {
      level: 'Medium',
      color: 'bg-amber-500',
      text: 'text-amber-600'
    },
    {
      level: 'High',
      color: 'bg-rose-500',
      text: 'text-rose-600'
    }
  ];

  setCrowdData(prev =>
    prev.map(zone => ({
      ...zone,
      ...levels[Math.floor(Math.random() * levels.length)]
    }))
  );
};

  // Realistic FIFA 2026 Mock Data
  // Realistic FIFA 2026 Mock Data
  const [crowdData, setCrowdData] = useState([
  { zone: 'Gate A (Main)', level: 'Low', color: 'bg-emerald-500', text: 'text-emerald-600' },
  { zone: 'North Concourse', level: 'Medium', color: 'bg-amber-500', text: 'text-amber-600' },
  { zone: 'Food Court West', level: 'High', color: 'bg-rose-500', text: 'text-rose-600' },
]);

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
            <button
  onClick={simulateCrowdUpdate}
  className="w-full mb-4 bg-slate-900 text-white py-2 rounded-xl text-xs font-bold uppercase hover:bg-slate-800 transition-colors"
>
  Refresh Crowd Status
</button>
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

        {/* Smart Navigation Card */}
<div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-200 relative overflow-hidden group">
  <div className="relative z-10 flex flex-col h-full">
    <h3 className="font-black italic uppercase tracking-wider flex items-center gap-2 text-sm mb-4">
      <Navigation size={18} /> Smart Navigation
    </h3>

    <div className="space-y-3">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Current Location"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white text-black placeholder-gray-500 text-sm font-medium"
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-white text-black placeholder-gray-500 text-sm font-medium"
        />
      </div>

      <div className="flex items-center gap-4">
        <div>
          <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-widest">
            Est. Time
          </p>

          <p className="text-xl font-black italic">
            {routeResult ? routeResult.time : '6 MINS'}
          </p>
        </div>

        <div className="h-8 w-px bg-indigo-500" />

        <div className="flex-1">
          <p className="text-[10px] uppercase font-bold text-indigo-200 tracking-widest">
            AI Recommendation
          </p>

          <p className="text-[11px] font-medium leading-tight">
            {routeResult
              ? routeResult.recommendation
              : 'Use West corridor to avoid halftime rush.'}
          </p>
        </div>
      </div>
    </div>

    {routeResult && (
      <div className="mt-4 bg-white/10 rounded-xl p-3">
        <p className="text-xs font-bold">
          Route: {routeResult.route}
        </p>

        <p className="text-xs mt-1">
          Time: {routeResult.time}
        </p>

        <p className="text-xs mt-1">
          {routeResult.recommendation}
        </p>
      </div>
    )}

    <button
      onClick={handleRoute}
      className="mt-6 bg-white text-indigo-600 w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-50 transition-colors"
    >
      Find Route
    </button>
  </div>

  <Navigation
    size={120}
    className="absolute right-[-30px] bottom-[-30px] text-white/10 rotate-12"
  />
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
        <div className="bg-slate-950 rounded-3xl p-8 text-white flex flex-col border border-slate-800 relative overflow-hidden h-[340px]">
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="bg-indigo-600 p-2 rounded-xl">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm uppercase tracking-widest leading-none">StadiumMind AI</h3>
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Powered by Gemini</span>
            </div>
          </div>

          <div className="overflow-y-auto h-[280px] pr-2 space-y-4">

  {chatMessages.map((msg, index) => (
    <div
      key={index}
      className={
        msg.sender === 'user'
          ? 'bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-tl-none self-start max-w-[90%]'
          : 'bg-indigo-600/10 border border-indigo-500/20 p-5 rounded-2xl rounded-tr-none self-end max-w-[90%]'
      }
    >
      <p className={`text-xs mb-1 font-bold ${
        msg.sender === 'user'
          ? 'text-slate-400'
          : 'text-indigo-400'
      }`}>
        {msg.sender === 'user' ? 'You' : 'StadiumMind AI'}
      </p>

      <p className="text-sm leading-relaxed text-slate-200">
        {msg.text}
      </p>
    </div>
  ))}
<div ref={messagesEndRef} />
</div>

          <div className="mt-8 bg-slate-900 rounded-2xl p-2 flex items-center border border-slate-800 relative z-10">
            <input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }}
  placeholder="Ask about tickets, food, or navigation..."
  className="bg-transparent border-none focus:ring-0 text-xs flex-1 px-3 outline-none"
/>
            <button
  onClick={handleSend}
  className="bg-indigo-600 p-2 rounded-xl hover:bg-indigo-500 transition-all"
>
              <ChevronRight size={16} />
            </button>
          </div>
          
          <Sparkles size={180} className="absolute right-[-40px] top-[-40px] text-white/5" />
        </div>

        {/* 5. Interactive Stadium Map */}
<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">

  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-black italic uppercase text-slate-800">
      Interactive Stadium Map
    </h3>

    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
      LIVE
    </span>
  </div>

  <div className="bg-slate-100 rounded-3xl p-5">

    <div className="bg-slate-800 text-white text-center py-3 rounded-xl font-black mb-4">
      FOOTBALL FIELD
    </div>

    <div className="grid grid-cols-3 gap-3">

      <div className="bg-green-500 text-white rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer">
        <p className="font-bold">Gate A</p>
        <p className="text-xs">Low Crowd</p>
      </div>

      <div className="bg-yellow-400 text-black rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer">
        <p className="font-bold">Section 105</p>
        <p className="text-xs">Your Seat</p>
      </div>

      <div className="bg-red-500 text-white rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer">
        <p className="font-bold">Gate B</p>
        <p className="text-xs">High Crowd</p>
      </div>

      <div className="bg-blue-500 text-white rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer">
        <p className="font-bold">Food Court</p>
        <p className="text-xs">120m Away</p>
      </div>

      <div className="bg-purple-500 text-white rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer">
        <p className="font-bold">Medical</p>
        <p className="text-xs">45m Away</p>
      </div>

      <div className="bg-green-600 text-white rounded-xl p-4 text-center hover:scale-105 transition cursor-pointer">
        <p className="font-bold">Gate C</p>
        <p className="text-xs">Low Crowd</p>
      </div>

    </div>
  </div>

  <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
    <p className="text-sm font-bold text-indigo-700">
      🤖 AI Insight
    </p>

    <p className="text-sm text-slate-600 mt-1">
      Congestion detected near Gate B. Recommended route:
      Gate A → Section 105. Estimated time saved: 6 minutes.
    </p>
  </div>

</div>
      </div>
    </div>
  );
};

export default FanDashboard;