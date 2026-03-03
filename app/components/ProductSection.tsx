import React from 'react';
import { Search, Plus } from 'lucide-react';
import Image from 'next/image';

const categories = [
  { name: 'All Product', count: 320, active: true },
  { name: 'Shoes', count: 182, active: false },
  { name: 'Clothing', count: 78, active: false },
  { name: 'Others Product', count: 60, active: false },
];

const products = [
  { id: 1, name: 'Nike Waffle Debut', desc: 'Retro gets modernized in the Nike Waffle Debut. Remember that smooth', price: 80.00, stock: 218, image: 'https://picsum.photos/seed/shoe1/400/300' },
  { id: 2, name: 'Nike Tech', desc: 'Crafted with stretchy, breathable material, the Nike Tech Woven Jacket', price: 130.83, stock: 198, image: 'https://picsum.photos/seed/jacket1/400/300' },
  { id: 3, name: 'Nike V2K Run New', desc: 'The Nike Elite Crew Basketball Socks offer a supportive fit and feel', price: 16.50, stock: 123, image: 'https://picsum.photos/seed/shoe2/400/300' },
  { id: 4, name: 'Nike P-6000', desc: 'The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing of iconic', price: 115.28, stock: 121, image: 'https://picsum.photos/seed/shoe3/400/300' },
  { id: 5, name: 'Nike Zoom Vomero Roam', desc: 'Designed for city conditions, this winterized version', price: 187.43, stock: 119, image: 'https://picsum.photos/seed/shoe4/400/300' },
  { id: 6, name: 'Men\'s Fleece Cargo Pants', desc: 'Clean meets casual with these brushed fleece cargo pants.', price: 65.42, stock: 192, image: 'https://picsum.photos/seed/pants1/400/300' },
];

export const ProductSection = () => (
  <div className="flex flex-1 flex-col overflow-hidden px-8 pb-8">
    <div className="mb-6 flex items-center justify-between">
      <div className="flex gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              cat.active
                ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                : 'border border-transparent text-gray-500 hover:bg-gray-50'
            }`}
          >
            {cat.name}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                cat.active ? 'bg-[#C2F16D] text-gray-900' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>
      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50">
        <Search className="h-5 w-5" />
      </button>
    </div>

    <div className="flex-1 overflow-y-auto pr-2">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-[#F4F4F4]">
              <div className="absolute left-3 top-3 z-10 rounded-md bg-[#2C2C2E] px-2.5 py-1 text-xs font-medium text-white">
                {product.stock} Stock
              </div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover mix-blend-multiply"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            
            <div className="flex flex-1 flex-col">
              <h3 className="mb-1 font-semibold text-gray-900">{product.name}</h3>
              <p className="mb-4 line-clamp-2 text-sm text-gray-500">{product.desc}</p>
              <div className="mt-auto">
                <div className="mb-4 text-lg font-bold text-gray-900">${product.price.toFixed(2)}</div>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  <Plus className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
