import React from 'react';
import { fastFoodDeals as fallbackDeals } from '../data/fastFoodDeals';
import DealCard from '../components/DealCard';
import { TrendingUp, Zap } from 'lucide-react';
import { useFetchData } from '../hooks/useFetchData';

const Home: React.FC = () => {
  const { data: deals } = useFetchData('fastFoodDeals', fallbackDeals);
  const trendingDeals = deals.filter(d => d.badge === 'Popular' || d.badge === 'Flash Sale').slice(0, 4);
  const flashSales = deals.filter(d => d.badge === 'Flash Sale').slice(0, 2);

  return (
    <div className="p-4 space-y-8 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Deal of the Day
          </span>
          <h2 className="text-3xl font-black text-white mb-2 leading-tight">
            $5 YOUR WAY MEAL
          </h2>
          <p className="text-white/80 mb-6 text-sm max-w-[200px]">
            Double Cheeseburger, Nuggets, Fries, and Drink at Burger King.
          </p>
          <button className="bg-white text-primary font-bold py-3 px-6 rounded-xl shadow-lg active:scale-95 transition-transform">
            Claim Now
          </button>
        </div>
        <div className="absolute top-[-20px] right-[-20px] opacity-20 rotate-12">
          <span className="text-[120px]">🍔</span>
        </div>
      </section>

      {/* Flash Sales */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="text-primary" size={24} fill="currentColor" />
          <h2 className="text-xl font-bold">Flash Sales</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashSales.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Trending Deals */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-primary" size={24} />
          <h2 className="text-xl font-bold">Trending Nearby</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingDeals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Categories Shortcut */}
      <section className="pb-4">
        <h2 className="text-xl font-bold mb-4">Browse by Craving</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Burgers', 'Pizza', 'Tacos', 'Chicken', 'Sushi', 'Salads'].map(cat => (
            <div key={cat} className="flex-shrink-0 bg-charcoal-light border border-white/5 px-6 py-3 rounded-xl font-bold text-sm">
              {cat}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
