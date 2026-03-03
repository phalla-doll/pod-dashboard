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
  <div className="flex w-[88px] flex-col items-center justify-between bg-white/40 backdrop-blur-xl border-r border-white/60 py-8 text-gray-500 z-20">
    <div className="flex flex-col items-center gap-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-sm">
        <RefreshCw className="h-6 w-6" strokeWidth={2} />
      </div>
      <nav className="flex flex-col items-center gap-6">
        <button className="hover:text-gray-900 transition-colors"><Home className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-gray-900 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-white/50"><Users className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><Box className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><Banknote className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><Clock className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><UserPlus className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><LinkIcon className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><CheckSquare className="h-6 w-6" strokeWidth={1.5} /></button>
        <button className="hover:text-gray-900 transition-colors"><HelpCircle className="h-6 w-6" strokeWidth={1.5} /></button>
      </nav>
    </div>
    <button className="text-red-500/80 hover:text-red-600 transition-colors">
      <LogOut className="h-6 w-6" strokeWidth={1.5} />
    </button>
  </div>
);
