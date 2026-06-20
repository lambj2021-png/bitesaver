import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FastFood from './pages/FastFood';
import Groceries from './pages/Groceries';
import PromoCodes from './pages/PromoCodes';
import GiftCards from './pages/GiftCards';
import Compare from './pages/Compare';
import Premium from './pages/Premium';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fast-food" element={<FastFood />} />
          <Route path="groceries" element={<Groceries />} />
          <Route path="promo-codes" element={<PromoCodes />} />
          <Route path="gift-cards" element={<GiftCards />} />
          <Route path="compare" element={<Compare />} />
          <Route path="premium" element={<Premium />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
