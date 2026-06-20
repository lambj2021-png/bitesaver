import React, { useState } from 'react';
import { groceryDeals as fallbackDeals } from '../data/groceryDeals';
import DealCard from '../components/DealCard';
import { Search } from 'lucide-react';
import { useFetchData } from '../hooks/useFetchData';

const Groceries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: deals } = useFetchData('groceryDeals', fallbackDeals);
  
  const filteredDeals = deals.filter(deal => 
    deal.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black">Grocery Savings</h2>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search stores or groceries..." 
            className="w-full bg-charcoal-light border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredDeals.map(deal => (
          <DealCard 
            key={deal.id} 
            deal={{
              id: deal.id,
              chain: deal.store,
              title: deal.title,
              description: deal.description,
              price: deal.price,
              expiryDate: deal.expiryDate,
              category: 'Grocery',
              badge: deal.badge as any
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Groceries;
