import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import type { Deal } from '../data/fastFoodDeals';

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  return (
    <div className="bg-charcoal-light rounded-xl overflow-hidden shadow-lg border border-white/5 transition-transform active:scale-[0.98]">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">{deal.chain}</span>
          {deal.badge && (
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
              deal.badge === 'Flash Sale' ? 'bg-red-500 text-white' :
              deal.badge === 'Limited Time' ? 'bg-amber-500 text-white' :
              deal.badge === 'Popular' ? 'bg-blue-500 text-white' :
              'bg-green-500 text-white'
            }`}>
              {deal.badge}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-1">{deal.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{deal.description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <div>
            <span className="text-2xl font-black text-white">{deal.price}</span>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors">
            Get Deal <ExternalLink size={14} />
          </button>
        </div>
      </div>
      
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
        <Clock size={12} /> Ends {new Date(deal.expiryDate).toLocaleDateString()}
      </div>
    </div>
  );
};

export default DealCard;
