'use client';

import React, { useState, useMemo } from 'react';
import { Search, Plus } from 'lucide-react';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Nike Waffle Debut', desc: 'Retro gets modernized in the Nike Waffle Debut. Remember that smooth', price: 80.00, stock: 218, category: 'Shoes', image: 'https://picsum.photos/seed/shoe1/400/300' },
  { id: 2, name: 'Nike Tech', desc: 'Crafted with stretchy, breathable material, the Nike Tech Woven Jacket', price: 130.83, stock: 198, category: 'Clothing', image: 'https://picsum.photos/seed/jacket1/400/300' },
  { id: 3, name: 'Nike V2K Run New', desc: 'The Nike Elite Crew Basketball Socks offer a supportive fit and feel', price: 16.50, stock: 123, category: 'Others Product', image: 'https://picsum.photos/seed/shoe2/400/300' },
  { id: 4, name: 'Nike P-6000', desc: 'The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing of iconic', price: 115.28, stock: 121, category: 'Shoes', image: 'https://picsum.photos/seed/shoe3/400/300' },
  { id: 5, name: 'Nike Zoom Vomero Roam', desc: 'Designed for city conditions, this winterized version', price: 187.43, stock: 119, category: 'Shoes', image: 'https://picsum.photos/seed/shoe4/400/300' },
  { id: 6, name: 'Men\'s Fleece Cargo Pants', desc: 'Clean meets casual with these brushed fleece cargo pants.', price: 65.42, stock: 192, category: 'Clothing', image: 'https://picsum.photos/seed/pants1/400/300' },
  { id: 7, name: 'Nike Air Force 1 \'07', desc: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball icon.', price: 110.00, stock: 340, category: 'Shoes', image: 'https://picsum.photos/seed/shoe5/400/300' },
  { id: 8, name: 'Nike Sportswear Club Fleece', desc: 'A closet staple, the Nike Sportswear Club Fleece Pullover Hoodie.', price: 60.00, stock: 150, category: 'Clothing', image: 'https://picsum.photos/seed/hoodie1/400/300' },
  { id: 9, name: 'Nike Everyday Cushion Crew', desc: 'Power through your workout with the Nike Everyday Cushion Crew Socks.', price: 22.00, stock: 400, category: 'Others Product', image: 'https://picsum.photos/seed/socks1/400/300' },
  { id: 10, name: 'Nike Air Max 270', desc: 'Nike\'s first lifestyle Air Max brings you style, comfort and big attitude.', price: 160.00, stock: 85, category: 'Shoes', image: 'https://picsum.photos/seed/shoe6/400/300' },
  { id: 11, name: 'Nike Dri-FIT', desc: 'The Nike Dri-FIT T-Shirt delivers a soft feel, sweat-wicking performance.', price: 30.00, stock: 210, category: 'Clothing', image: 'https://picsum.photos/seed/shirt1/400/300' },
  { id: 12, name: 'Nike Brasilia Backpack', desc: 'The Nike Brasilia Backpack has plenty of organized space to keep your gear in check.', price: 45.00, stock: 110, category: 'Others Product', image: 'https://picsum.photos/seed/bag1/400/300' },
];

export const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Product');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = useMemo(() => {
    const counts = {
      'All Product': products.length,
      'Shoes': products.filter(p => p.category === 'Shoes').length,
      'Clothing': products.filter(p => p.category === 'Clothing').length,
      'Others Product': products.filter(p => p.category === 'Others Product').length,
    };

    return [
      { name: 'All Product', count: counts['All Product'] },
      { name: 'Shoes', count: counts['Shoes'] },
      { name: 'Clothing', count: counts['Clothing'] },
      { name: 'Others Product', count: counts['Others Product'] },
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'All Product' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden px-8 pb-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
          {categories.map((cat) => {
            const isActive = cat.name === activeCategory;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border border-gray-200 bg-white text-gray-900 shadow-sm'
                    : 'border border-transparent text-gray-500 hover:bg-gray-50'
                }`}
              >
                {cat.name}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive ? 'bg-[#C2F16D] text-gray-900' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-48 rounded-full border border-gray-200 px-4 text-sm outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all"
              autoFocus
            />
          )}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
              isSearchOpen || searchQuery 
                ? 'border-gray-300 bg-gray-50 text-gray-900' 
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-1 font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
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
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-gray-500">
            <Search className="mb-4 h-12 w-12 opacity-20" />
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
