import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Utensils, ShoppingBasket, Ticket, CreditCard, Scale, Star } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

const Layout: React.FC = () => {
  const meta = useMeta();
  const navItems = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/fast-food', icon: <Utensils size={20} />, label: 'Fast Food' },
    { to: '/groceries', icon: <ShoppingBasket size={20} />, label: 'Groceries' },
    { to: '/promo-codes', icon: <Ticket size={20} />, label: 'Promos' },
    { to: '/gift-cards', icon: <CreditCard size={20} />, label: 'Cards' },
    { to: '/compare', icon: <Scale size={20} />, label: 'Compare' },
    { to: '/premium', icon: <Star size={20} />, label: 'Premium' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-charcoal text-white pb-20">
      <header className="bg-charcoal-light border-b border-white/10 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            🍔 BiteSaver
          </h1>
          <div className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
            SAMPLE DATA
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
        {meta && (
          <div className="p-8 text-center text-gray-600 text-[10px] uppercase tracking-widest">
            Data updated: {meta.last_scraped} • Scraper v{meta.scraper_version}
          </div>
        )}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-charcoal-light border-t border-white/10 px-2 py-3 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }: { isActive: boolean }) =>
                `flex flex-col items-center gap-1 transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-200'
                }`
              }
            >
              {item.icon}
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
