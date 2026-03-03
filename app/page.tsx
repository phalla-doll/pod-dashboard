import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProductSection } from './components/ProductSection';
import { CartSection } from './components/CartSection';

export default function POSDashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f5f5f7] font-sans text-gray-900 relative">
      {/* Background decorative elements for frosted glass effect */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/50 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-200/40 blur-[100px] pointer-events-none" />
      
      <div className="z-10 flex h-full w-full">
        <Sidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
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
