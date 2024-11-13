import React, { useState } from 'react';
import Header from './components/Header';
import TradePanel from './components/TradePanel';
import OrderBook from './components/OrderBook';

function App() {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">P2P Block Trade</h2>
          <p className="text-gray-400">
            Offers single trade limits up to 200,000 USDT, with better price and higher security.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <TradePanel tradeType={tradeType} setTradeType={setTradeType} />
          </div>
          
          <div className="lg:col-span-8">
            <OrderBook tradeType={tradeType} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;