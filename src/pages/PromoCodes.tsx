import React, { useState } from 'react';
import { promoCodes as fallbackCodes } from '../data/promoCodes';
import { Copy, Check, Search } from 'lucide-react';
import { useFetchData } from '../hooks/useFetchData';

const PromoCodes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { data: codes } = useFetchData('promoCodes', fallbackCodes);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredCodes = codes.filter(pc => 
    pc.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pc.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 space-y-6 animate-in slide-in-from-right duration-300">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black">Promo Codes</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search delivery apps or services..." 
            className="w-full bg-charcoal-light border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredCodes.map(pc => (
          <div key={pc.id} className="bg-charcoal-light rounded-xl p-4 border border-white/5 flex items-center justify-between">
            <div className="flex-1">
              <span className="text-primary font-bold text-xs uppercase">{pc.service}</span>
              <h3 className="font-bold text-lg">{pc.code}</h3>
              <p className="text-gray-400 text-xs">{pc.description}</p>
            </div>
            <button 
              onClick={() => handleCopy(pc.id, pc.code)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                copiedId === pc.id ? 'bg-green-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {copiedId === pc.id ? (
                <>
                  <Check size={16} /> Copied
                </>
              ) : (
                <>
                  <Copy size={16} /> Copy
                </>
              )}
            </button>
          </div>
        ))}
      </div>
      
      {copiedId && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-300">
          Code copied to clipboard! 📋
        </div>
      )}
    </div>
  );
};

export default PromoCodes;
