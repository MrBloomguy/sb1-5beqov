import React from 'react';
import { Shield, Clock, Star } from 'lucide-react';

interface OrderBookProps {
  tradeType: 'buy' | 'sell';
}

const OrderBook = ({ tradeType }: OrderBookProps) => {
  const merchants = [
    {
      name: 'CryptoMaster',
      completionRate: '99.8%',
      trades: 2481,
      available: 50000,
      price: 1145.20,
      minAmount: 5000,
      maxAmount: 100000,
      paymentMethods: ['Bank Transfer'],
      verified: true,
      rating: 4.9,
      orderCount: '2,445',
      responseTime: '15min'
    },
    // ... more merchants with similar structure
  ];

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="table-header text-left">Advertiser</th>
            <th className="table-header text-right">Price</th>
            <th className="table-header text-right">Available/Limits</th>
            <th className="table-header">Payment</th>
            <th className="table-header"></th>
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant, index) => (
            <tr key={index} className="merchant-row border-b border-gray-800">
              <td className="merchant-cell">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                    {merchant.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{merchant.name}</span>
                      {merchant.verified && (
                        <Shield className="w-4 h-4 text-[#F0B90B]" />
                      )}
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-400 mt-1">
                      <span>{merchant.orderCount} orders</span>
                      <span>{merchant.completionRate}</span>
                      <span>{merchant.responseTime}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="merchant-cell text-right">
                <div className="text-xl font-medium">₦{merchant.price.toLocaleString()}</div>
              </td>
              <td className="merchant-cell text-right">
                <div className="text-sm">
                  <div>Available: {merchant.available.toLocaleString()} USDT</div>
                  <div className="text-gray-400">
                    Limits: ₦{merchant.minAmount.toLocaleString()} - ₦{merchant.maxAmount.toLocaleString()}
                  </div>
                </div>
              </td>
              <td className="merchant-cell">
                <div className="flex flex-wrap gap-2">
                  {merchant.paymentMethods.map((method, idx) => (
                    <span key={idx} className="badge badge-success">
                      {method}
                    </span>
                  ))}
                </div>
              </td>
              <td className="merchant-cell">
                <button className="btn-primary">
                  {tradeType === 'buy' ? 'Buy USDT' : 'Sell USDT'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;