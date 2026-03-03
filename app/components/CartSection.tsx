import React from 'react';
import { Trash2, Minus, Plus, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const cartItems = [
  { id: 1, name: 'Nike V2K Run New', size: '42', color: 'Green', price: 182.72, qty: 1, image: 'https://picsum.photos/seed/shoe2/100/100' },
  { id: 2, name: 'Phantom and Baroque Br...', size: '42', color: 'Brown', price: 187.92, qty: 1, image: 'https://picsum.photos/seed/shoe5/100/100' },
];

export const CartSection = () => (
  <div className="flex w-[400px] flex-col border-l border-gray-100 bg-[#F9FAFB] p-6">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-900">Detail Transaction</h2>
      <button className="flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-100 transition-colors">
        <Trash2 className="h-4 w-4" />
        Reset Order
      </button>
    </div>

    <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
      {cartItems.map((item) => (
        <div key={item.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#F4F4F4]">
            <Image src={item.image} alt={item.name} fill className="object-cover mix-blend-multiply" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h4>
                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <span>Size {item.size}</span>
                  <div className="flex items-center gap-1">
                    <div className={`h-2 w-2 rounded-full ${item.color === 'Green' ? 'bg-green-600' : 'bg-amber-800'}`}></div>
                    {item.color}
                  </div>
                </div>
              </div>
              <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3 rounded-full border border-gray-200 p-1">
                <button className="flex h-6 w-6 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-medium w-4 text-center">0{item.qty}</span>
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F16D] text-gray-900 transition-colors hover:bg-[#b3e65c]">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <div className="text-sm font-bold text-gray-900">
                <span className="text-gray-400 font-normal mr-1">Total</span>
                ${item.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 flex flex-col gap-6">
      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white">
            <span className="text-[10px]">%</span>
          </div>
          Promo New User (10%)
        </div>
        <button className="rounded-full bg-[#C2F16D] px-4 py-1.5 text-sm font-medium text-gray-900 hover:bg-[#b3e65c] transition-colors">
          Change Promo
        </button>
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between text-gray-500">
          <span>Sub-Total</span>
          <span className="font-medium text-gray-900">$370.67</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Tax (12%)</span>
          <span className="font-medium text-gray-900">$44.48</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Discount</span>
          <span className="font-medium text-gray-900">-$41.51</span>
        </div>
        <div className="my-1 border-t border-dashed border-gray-200"></div>
        <div className="flex justify-between text-base font-bold text-gray-900">
          <span>Total Payment</span>
          <span>$373.64</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-12 items-center justify-center rounded bg-gray-50">
            <div className="flex -space-x-2">
              <div className="h-5 w-5 rounded-full bg-red-500 mix-blend-multiply"></div>
              <div className="h-5 w-5 rounded-full bg-amber-400 mix-blend-multiply"></div>
            </div>
          </div>
          <span className="font-medium text-gray-900">Credit Card</span>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
          Change Method <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <button className="w-full rounded-2xl bg-[#C2F16D] py-4 text-lg font-semibold text-gray-900 hover:bg-[#b3e65c] transition-colors shadow-sm">
        Continue
      </button>
    </div>
  </div>
);
