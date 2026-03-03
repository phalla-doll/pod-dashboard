import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProductSection } from './components/ProductSection';
import { CartSection } from './components/CartSection';

export default function POSDashboard() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#E5E5E5] p-6 font-sans text-gray-900">
      <div className="flex h-full w-full max-w-[1600px] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-gray-200/50">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden bg-white">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <ProductSection />
            <CartSection />
          </div>
        </div>
      </div>
    </div>
  );
}
