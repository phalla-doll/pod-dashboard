import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProductSection } from './components/ProductSection';
import { CartSection } from './components/CartSection';

export default function POSDashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-sans text-gray-900">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden bg-white">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <ProductSection />
          <CartSection />
        </div>
      </div>
    </div>
  );
}
