'use client';

import React, { useState } from 'react';
import { Trash2, Minus, Plus, ChevronRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

const initialCartItems = [
  { id: 1, name: 'Nike V2K Run New', size: '42', color: 'Green', price: 182.72, qty: 1, image: 'https://picsum.photos/seed/shoe2/100/100' },
  { id: 2, name: 'Phantom and Baroque Br...', size: '42', color: 'Brown', price: 187.92, qty: 1, image: 'https://picsum.photos/seed/shoe5/100/100' },
];

export const CartSection = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleReset = () => {
    setCartItems([]);
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQty = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subTotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subTotal * 0.12;
  const discount = cartItems.length > 0 ? 41.51 : 0;
  const total = subTotal + tax - discount;

  return (
    <div className="flex w-[400px] flex-col border-l border-white/40 bg-white/30 backdrop-blur-xl p-6 z-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800 tracking-tight">Detail Transaction</h2>
        <button 
          onClick={handleReset}
          disabled={cartItems.length === 0}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            cartItems.length > 0 
              ? 'bg-red-50/80 backdrop-blur-sm border border-red-100/50 text-red-500 hover:bg-red-100/80' 
              : 'bg-gray-100/50 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.5} />
          Reset Order
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-2 no-scrollbar">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 rounded-3xl bg-white/50 backdrop-blur-md p-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-white/60 transition-all hover:bg-white/60">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white/50">
                <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply opacity-90" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800 line-clamp-1 text-sm">{item.name}</h4>
                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                      <span>Size {item.size}</span>
                      <div className="flex items-center gap-1">
                        <div className={`h-2 w-2 rounded-full ${item.color === 'Green' ? 'bg-emerald-500' : 'bg-amber-700'}`}></div>
                        {item.color}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50/80 text-red-500 hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 rounded-full bg-white/60 border border-white/80 p-1 shadow-sm">
                    <button 
                      onClick={() => updateQty(item.id, -1)}
                      className="flex h-6 w-6 items-center justify-center rounded-full text-gray-500 hover:bg-white transition-colors"
                    >
                      <Minus className="h-3 w-3" strokeWidth={2} />
                    </button>
                    <span className="text-sm font-medium w-4 text-center text-gray-700">0{item.qty}</span>
                    <button 
                      onClick={() => updateQty(item.id, 1)}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white transition-colors hover:bg-gray-800 shadow-sm"
                    >
                      <Plus className="h-3 w-3" strokeWidth={2} />
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-gray-400 gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/50 shadow-sm border border-white/60">
              <ShoppingBag className="h-10 w-10 text-gray-300" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="text-base font-medium text-gray-600">Your cart is empty</p>
              <p className="text-sm mt-1">Start shopping to add items!</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 text-sm font-medium text-gray-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-sm">
              <span className="text-[11px] font-bold">%</span>
            </div>
            Promo New User (10%)
          </div>
          <button className="rounded-full bg-white/80 border border-white px-4 py-1.5 text-xs font-semibold text-gray-700 hover:bg-white transition-colors shadow-sm">
            Change
          </button>
        </div>

        <div className="flex flex-col gap-3 text-sm px-1">
          <div className="flex justify-between text-gray-500">
            <span>Sub-Total</span>
            <span className="font-medium text-gray-800">${subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Tax (12%)</span>
            <span className="font-medium text-gray-800">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Discount</span>
            <span className="font-medium text-emerald-600">-${discount.toFixed(2)}</span>
          </div>
          <div className="my-1 border-t border-dashed border-gray-300/50"></div>
          <div className="flex justify-between text-base font-semibold text-gray-900">
            <span>Total Payment</span>
            <span>${Math.max(0, total).toFixed(2)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-12 items-center justify-center rounded-lg bg-white shadow-sm border border-gray-100">
              <div className="flex -space-x-1.5">
                <div className="h-4 w-4 rounded-full bg-red-500 mix-blend-multiply opacity-90"></div>
                <div className="h-4 w-4 rounded-full bg-amber-400 mix-blend-multiply opacity-90"></div>
              </div>
            </div>
            <span className="font-medium text-gray-800 text-sm">Credit Card</span>
          </div>
          <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors">
            Change <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <button 
          disabled={cartItems.length === 0}
          className={`w-full rounded-2xl py-4 text-base font-semibold transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] ${
            cartItems.length > 0
              ? 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
