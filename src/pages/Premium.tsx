import React from 'react';
import { Star, Bell, Shield, Zap, CheckCircle2 } from 'lucide-react';

const Premium: React.FC = () => {
  const features = [
    {
      icon: <Zap className="text-amber-400" />,
      title: 'Early Access',
      desc: 'Get flash deals 2 hours before everyone else.'
    },
    {
      icon: <Bell className="text-blue-400" />,
      title: 'Smart Alerts',
      desc: 'Instant notifications when your favorite items go on sale.'
    },
    {
      icon: <Shield className="text-green-400" />,
      title: 'Ad-Free Experience',
      desc: 'No sponsored placements or banner ads. Ever.'
    },
    {
      icon: <Star className="text-primary" />,
      title: 'Premium Badge',
      desc: 'Show off your smart-saver status in the community.'
    }
  ];

  return (
    <div className="p-4 space-y-8 animate-in zoom-in duration-300">
      <div className="text-center py-8">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
          <Star className="text-primary animate-pulse" size={48} fill="currentColor" />
        </div>
        <h2 className="text-3xl font-black mb-2">BiteSaver Premium</h2>
        <p className="text-gray-400">The ultimate tool for the professional bargain hunter.</p>
      </div>

      <div className="grid gap-4">
        {features.map((f, i) => (
          <div key={i} className="bg-charcoal-light p-4 rounded-2xl border border-white/5 flex gap-4">
            <div className="flex-shrink-0 mt-1">{f.icon}</div>
            <div>
              <h3 className="font-bold">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-charcoal-light to-charcoal border border-primary/30 p-8 rounded-3xl text-center shadow-xl">
        <div className="text-primary font-black text-5xl mb-2">$2.99</div>
        <div className="text-gray-500 font-bold text-sm mb-8">PER MONTH</div>
        
        <ul className="text-left space-y-3 mb-8 max-w-[200px] mx-auto">
          <li className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="text-primary" size={16} /> Save $50+/mo avg
          </li>
          <li className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="text-primary" size={16} /> Exclusive coupons
          </li>
          <li className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="text-primary" size={16} /> Priority support
          </li>
        </ul>

        <button className="w-full bg-primary hover:bg-primary-dark text-white font-black py-4 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all">
          UPGRADE NOW
        </button>
        <p className="mt-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          Cancel anytime • 7-day free trial
        </p>
      </div>
    </div>
  );
};

export default Premium;
