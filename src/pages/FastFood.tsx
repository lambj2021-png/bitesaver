import React, { useState } from 'react';
import { fastFoodDeals as fallbackDeals } from '../data/fastFoodDeals';
import DealCard from '../components/DealCard';
import { Search, Filter } from 'lucide-react';
import { useFetchData } from '../hooks/useFetchData';

const FastFood: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: deals } = useFetchData('fastFoodDeals', fallbackDeals);
  
  const filteredDeals = deals.filter(deal => 
    deal.chain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black">Fast Food Deals</h2>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search chains or items..." 
              className="w-full bg-charcoal-light border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-charcoal-light border border-white/10 p-3 rounded-xl">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDeals.map(deal => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No deals found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default FastFood;
