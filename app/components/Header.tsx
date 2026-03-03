import React from 'react';
import { Bell, Settings, UserPlus, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const Header = () => (
  <header className="flex items-center justify-between px-8 py-6">
    <h1 className="text-2xl font-semibold text-gray-900">Create Transaction</h1>
    <div className="flex items-center gap-4">
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">
        <Bell className="h-5 w-5" />
      </button>
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">
        <Settings className="h-5 w-5" />
      </button>
      
      <div className="h-8 w-px bg-gray-200 mx-2"></div>
      
      <div className="flex -space-x-2">
        <div className="relative h-10 w-10 rounded-full ring-2 ring-white overflow-hidden">
          <Image src="https://picsum.photos/seed/user1/100/100" alt="User 1" fill className="object-cover" />
        </div>
        <div className="relative h-10 w-10 rounded-full ring-2 ring-white overflow-hidden">
          <Image src="https://picsum.photos/seed/user2/100/100" alt="User 2" fill className="object-cover" />
        </div>
        <div className="relative h-10 w-10 rounded-full ring-2 ring-white overflow-hidden">
          <Image src="https://picsum.photos/seed/user3/100/100" alt="User 3" fill className="object-cover" />
        </div>
      </div>
      
      <button className="flex h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
        <UserPlus className="h-4 w-4" />
        New Access
      </button>
      
      <div className="h-8 w-px bg-gray-200 mx-2"></div>
      
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image src="https://picsum.photos/seed/mainuser/100/100" alt="Main User" fill className="object-cover" />
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  </header>
);
