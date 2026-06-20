import React, { useState } from 'react';
import { comparisonData as fallbackData } from '../data/comparisons';
import { Scale, Info, ChevronUp, ChevronDown } from 'lucide-react';
import { useFetchData } from '../hooks/useFetchData';

const Compare: React.FC = () => {
  const [sortBy, setSortBy] = useState<'caloriesPerDollar' | 'price' | 'calories'>('caloriesPerDollar');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const { data: comparisonData } = useFetchData('comparisons', fallbackData);

  const sortedData = [...comparisonData].sort((a, b) => {
    if (sortOrder === 'desc') {
      return b[sortBy] - a[sortBy];
    }
    return a[sortBy] - b[sortBy];
  });

  const toggleSort = (key: 'caloriesPerDollar' | 'price' | 'calories') => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(key);
      setSortOrder('desc');
    }
  };

  return (
    <div className="p-4 space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-black flex items-center gap-2">
          <Scale className="text-primary" /> Bang for your Bite
        </h2>
        <p className="text-gray-400 text-sm">
          Compare meals by calories per dollar (cal/$) to find the best value for your budget.
        </p>
      </div>

      <div className="bg-charcoal-light rounded-xl border border-white/5 overflow-hidden">
        <div className="grid grid-cols-12 bg-white/5 p-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div className="col-span-5">Item / Store</div>
          <div className="col-span-2 text-center cursor-pointer flex items-center justify-center gap-1" onClick={() => toggleSort('price')}>
            Price {sortBy === 'price' && (sortOrder === 'desc' ? <ChevronDown size={10}/> : <ChevronUp size={10}/>)}
          </div>
          <div className="col-span-2 text-center cursor-pointer flex items-center justify-center gap-1" onClick={() => toggleSort('calories')}>
            Cal {sortBy === 'calories' && (sortOrder === 'desc' ? <ChevronDown size={10}/> : <ChevronUp size={10}/>)}
          </div>
          <div className="col-span-3 text-right cursor-pointer flex items-center justify-end gap-1" onClick={() => toggleSort('caloriesPerDollar')}>
            Cal/$ {sortBy === 'caloriesPerDollar' && (sortOrder === 'desc' ? <ChevronDown size={10}/> : <ChevronUp size={10}/>)}
          </div>
        </div>
        
        <div className="divide-y divide-white/5">
          {sortedData.map((item, index) => (
            <div key={item.id} className={`grid grid-cols-12 p-3 items-center ${index === 0 ? 'bg-primary/5' : ''}`}>
              <div className="col-span-5">
                <div className="font-bold text-sm truncate">{item.name}</div>
                <div className="text-[10px] text-gray-500 truncate">{item.store}</div>
              </div>
              <div className="col-span-2 text-center text-sm font-medium">
                ${item.price.toFixed(2)}
              </div>
              <div className="col-span-2 text-center text-sm font-medium">
                {item.calories}
              </div>
              <div className="col-span-3 text-right">
                <span className={`font-black text-sm ${index === 0 ? 'text-primary' : 'text-white'}`}>
                  {item.caloriesPerDollar.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex gap-3">
        <Info className="text-blue-400 flex-shrink-0" size={20} />
        <p className="text-[11px] text-blue-300/90 leading-relaxed">
          Calorie counts are estimates based on standard menu data. Prices may vary by location. "Home Cooking" estimated based on grocery costs.
        </p>
      </div>
    </div>
  );
};

export default Compare;
