import React from 'react';
import { giftCards as fallbackCards } from '../data/giftCards';
import { Tag, ExternalLink } from 'lucide-react';
import { useFetchData } from '../hooks/useFetchData';

const GiftCards: React.FC = () => {
  const { data: cards } = useFetchData('giftCards', fallbackCards);

  return (
    <div className="p-4 space-y-6 animate-in slide-in-from-right duration-300">
      <h2 className="text-2xl font-black">Discounted Gift Cards</h2>
      
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-3">
        <Tag className="text-primary flex-shrink-0" size={24} />
        <p className="text-sm text-primary/90">
          <strong>Pro Tip:</strong> Stack these gift cards with promo codes and in-app deals for the ultimate discount!
        </p>
      </div>

      <div className="space-y-3">
        {[...cards].sort((a, b) => b.discount - a.discount).map(card => (
          <div key={card.id} className="bg-charcoal-light rounded-xl overflow-hidden border border-white/5">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">{card.brand}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-primary font-black text-xl">${card.price.toFixed(2)}</span>
                  <span className="text-gray-500 line-through text-sm">${card.value.toFixed(2)}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-green-500/20 text-green-500 text-sm font-black px-2 py-1 rounded mb-2">
                  {card.discount}% OFF
                </div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                  Source: {card.source}
                </div>
              </div>
            </div>
            <button className="w-full bg-white/5 hover:bg-white/10 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-colors border-t border-white/5">
              Buy on {card.source} <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCards;
