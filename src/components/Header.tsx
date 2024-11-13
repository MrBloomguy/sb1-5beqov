import React from 'react';
import { Search, Bell, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-[#F0B90B]">P2P Exchange</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#F0B90B] transition-colors">Express</a>
              <a href="#" className="text-[#F0B90B]">P2P Trading</a>
              <a href="#" className="text-gray-300 hover:text-[#F0B90B] transition-colors">Orders</a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;