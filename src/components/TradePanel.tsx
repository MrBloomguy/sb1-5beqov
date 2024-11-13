import React, { useState } from 'react';
import { Building2, CreditCard, Wallet } from 'lucide-react';

interface TradePanelProps {
  tradeType: 'buy' | 'sell';
  setTradeType: (type: 'buy' | 'sell') => void;
}

const TradePanel = ({ tradeType, setTradeType }: TradePanelProps) => {
  const [amount, setAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('bank');

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex space-x-2 mb-6">
        <button
          className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
            tradeType === 'buy' ? 'tab-active' : 'tab-inactive'
          }`}
          onClick={() => setTradeType('buy')}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
            tradeType === 'sell' ? 'tab-active' : 'tab-inactive'
          }`}
          onClick={() => setTradeType('sell')}
        >
          Sell
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-400">Amount</label>
            <span className="text-sm text-[#F0B90B]">USDT</span>
          </div>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-800 rounded-lg px-4 py-3 input-focus text-white"
            placeholder="Enter amount..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'bank', name: 'Bank Transfer', icon: Building2 },
              { id: 'card', name: 'Card', icon: CreditCard },
              { id: 'wallet', name: 'E-Wallet', icon: Wallet },
            ].map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedPayment(id)}
                className={`p-3 rounded-lg transition-all ${
                  selectedPayment === id
                    ? 'bg-[#F0B90B]/20 text-[#F0B90B]'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm">{name}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="w-full btn-primary py-4">
          {tradeType === 'buy' ? 'Buy USDT' : 'Sell USDT'}
        </button>
      </div>
    </div>
  );
};

export default TradePanel;