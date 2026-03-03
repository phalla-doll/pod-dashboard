import React from 'react';
import {
  Home,
  Users,
  Box,
  Banknote,
  Clock,
  UserPlus,
  Link as LinkIcon,
  CheckSquare,
  HelpCircle,
  LogOut,
  RefreshCw
} from 'lucide-react';

export const Sidebar = () => (
  <div className="flex w-[88px] flex-col items-center justify-between bg-[#1C1C1E] py-8 text-gray-400">
    <div className="flex flex-col items-center gap-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl text-[#C2F16D]">
        <RefreshCw className="h-8 w-8" strokeWidth={2.5} />
      </div>
      <nav className="flex flex-col items-center gap-6">
        <button className="hover:text-white transition-colors"><Home className="h-6 w-6" /></button>
        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C2F16D] text-[#1C1C1E] shadow-sm"><Users className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><Box className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><Banknote className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><Clock className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><UserPlus className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><LinkIcon className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><CheckSquare className="h-6 w-6" /></button>
        <button className="hover:text-white transition-colors"><HelpCircle className="h-6 w-6" /></button>
      </nav>
    </div>
    <button className="text-red-500 hover:text-red-400 transition-colors">
      <LogOut className="h-6 w-6" />
    </button>
  </div>
);
