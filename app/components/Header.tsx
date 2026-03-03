import React from 'react';
import { Bell, Settings, UserPlus, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const Header = () => (
  <header className="flex items-center justify-between px-8 py-6 bg-white/30 backdrop-blur-md border-b border-white/40 z-10">
    <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">Create Transaction</h1>
    <div className="flex items-center gap-4">
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 border border-white/60 text-gray-600 hover:bg-white/80 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <Bell className="h-5 w-5" strokeWidth={1.5} />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 border border-white/60 text-gray-600 hover:bg-white/80 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <Settings className="h-5 w-5" strokeWidth={1.5} />
      </button>
      
      <div className="h-8 w-px bg-gray-300/50 mx-2"></div>
      
      <div className="flex -space-x-2">
        <div className="relative h-10 w-10 rounded-full ring-2 ring-white/80 overflow-hidden shadow-sm">
          <Image src="https://picsum.photos/seed/user1/100/100" alt="User 1" fill className="object-cover" />
        </div>
        <div className="relative h-10 w-10 rounded-full ring-2 ring-white/80 overflow-hidden shadow-sm">
          <Image src="https://picsum.photos/seed/user2/100/100" alt="User 2" fill className="object-cover" />
        </div>
        <div className="relative h-10 w-10 rounded-full ring-2 ring-white/80 overflow-hidden shadow-sm">
          <Image src="https://picsum.photos/seed/user3/100/100" alt="User 3" fill className="object-cover" />
        </div>
      </div>
      
      <button className="flex h-10 items-center gap-2 rounded-full bg-white/50 border border-white/60 px-4 text-sm font-medium text-gray-700 hover:bg-white/80 transition-colors shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <UserPlus className="h-4 w-4" strokeWidth={1.5} />
        New Access
      </button>
      
      <div className="h-8 w-px bg-gray-300/50 mx-2"></div>
      
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="relative h-10 w-10 rounded-full overflow-hidden shadow-sm ring-1 ring-black/5">
          <Image src="https://picsum.photos/seed/mainuser/100/100" alt="Main User" fill className="object-cover" />
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  </header>
);
