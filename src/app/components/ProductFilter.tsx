"use client";

import { useState } from "react";
import { X, SlidersHorizontal, ChevronDown } from "lucide-react";

interface FilterProps {
  onSortChange: (sort: string) => void;
  onPriceRangeChange: (range: string) => void;
  onMaterialChange: (material: string) => void;
  onWeightChange: (weight: string) => void;
  onDiscountChange: (discount: string) => void;
  onClearFilters: () => void;
}

export function ProductFilter({
  onSortChange,
  onPriceRangeChange,
  onMaterialChange,
  onWeightChange,
  onDiscountChange,
  onClearFilters,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const sortOptions = [
    { label: "Latest", value: "latest" },
    { label: "Discount", value: "discount" },
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Customer Rating", value: "rating" },
  ];

  const priceRanges = [
    { label: "Under ₹5,000", value: "0-5000" },
    { label: "₹5,001 - ₹10,000", value: "5001-10000" },
    { label: "₹10,001 - ₹15,000", value: "10001-15000" },
    { label: "₹15,001 - ₹20,000", value: "15001-20000" },
    { label: "₹20,001 - ₹30,000", value: "20001-30000" },
    { label: "₹30,001 - ₹50,000", value: "30001-50000" },
    { label: "Above ₹50,000", value: "50000+" },
  ];

  const materials = [
    { label: "Gold", value: "gold" },
    { label: "Diamond", value: "diamond" },
    { label: "Platinum", value: "platinum" },
    { label: "Silver", value: "silver" },
    { label: "Gemstone", value: "gemstone" },
  ];

  const weightRanges = [
    { label: "0-2 g", value: "0-2" },
    { label: "2-5 g", value: "2-5" },
    { label: "5-10 g", value: "5-10" },
    { label: "10-20 g", value: "10-20" },
    { label: "Above 20 g", value: "20+" },
  ];

  const discounts = [
    { label: "Flat 10% off on Making Charges", value: "10-off-making" },
    { label: "Flat 20% off on MRP", value: "20-off-mrp" },
    { label: "Flat 25% off on Making Charges", value: "25-off-making" },
    { label: "50% Off on Making + 15% Off on Diamond", value: "50-off-making-15-off-diamond" },
  ];

  const handleFilterClick = (type: string, value: string) => {
    const filterKey = `${type}-${value}`;
    setActiveFilters(prev => 
      prev.includes(filterKey) 
        ? prev.filter(f => f !== filterKey)
        : [...prev, filterKey]
    );
  };

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-[#E92247] transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="font-medium text-sm">Filters</span>
        {activeFilters.length > 0 && (
          <span className="bg-[#E92247] text-white text-xs px-2 py-0.5 rounded-full">
            {activeFilters.length}
          </span>
        )}
      </button>

      {/* Desktop Sidebar - Always Visible */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white rounded-xl border border-gray-100 p-4 sticky top-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            {activeFilters.length > 0 && (
              <button
                onClick={() => {
                  setActiveFilters([]);
                  onClearFilters();
                }}
                className="text-sm text-[#E92247] hover:underline"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Sort By */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    onChange={() => onSortChange(option.value)}
                    className="w-4 h-4 text-[#E92247] border-gray-300 focus:ring-[#E92247]"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(`price-${range.value}`)}
                    onChange={() => {
                      handleFilterClick('price', range.value);
                      onPriceRangeChange(range.value);
                    }}
                    className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                  />
                  <span className="text-sm text-gray-700">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <h4 className="font-medium text-gray-900 mb-3">Material</h4>
            <div className="space-y-2">
              {materials.map((material) => (
                <label key={material.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(`material-${material.value}`)}
                    onChange={() => {
                      handleFilterClick('material', material.value);
                      onMaterialChange(material.value);
                    }}
                    className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                  />
                  <span className="text-sm text-gray-700">{material.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Weight Range */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <h4 className="font-medium text-gray-900 mb-3">Weight Range</h4>
            <div className="space-y-2">
              {weightRanges.map((weight) => (
                <label key={weight.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(`weight-${weight.value}`)}
                    onChange={() => {
                      handleFilterClick('weight', weight.value);
                      onWeightChange(weight.value);
                    }}
                    className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                  />
                  <span className="text-sm text-gray-700">{weight.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Discount */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Discount Offers</h4>
            <div className="space-y-2">
              {discounts.map((discount) => (
                <label key={discount.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters.includes(`discount-${discount.value}`)}
                    onChange={() => {
                      handleFilterClick('discount', discount.value);
                      onDiscountChange(discount.value);
                    }}
                    className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                  />
                  <span className="text-sm text-gray-700">{discount.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar - Drawer */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="font-semibold text-gray-900">Filters</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              {activeFilters.length > 0 && (
                <button
                  onClick={() => {
                    setActiveFilters([]);
                    onClearFilters();
                  }}
                  className="w-full mb-4 py-2 text-sm text-[#E92247] border border-[#E92247] rounded-lg hover:bg-[#E92247] hover:text-white transition-colors"
                >
                  Clear All
                </button>
              )}

              {/* Sort By */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        onChange={() => onSortChange(option.value)}
                        className="w-4 h-4 text-[#E92247] border-gray-300 focus:ring-[#E92247]"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(`price-${range.value}`)}
                        onChange={() => {
                          handleFilterClick('price', range.value);
                          onPriceRangeChange(range.value);
                        }}
                        className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                      />
                      <span className="text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">Material</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(`material-${material.value}`)}
                        onChange={() => {
                          handleFilterClick('material', material.value);
                          onMaterialChange(material.value);
                        }}
                        className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                      />
                      <span className="text-sm text-gray-700">{material.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Weight Range */}
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">Weight Range</h4>
                <div className="space-y-2">
                  {weightRanges.map((weight) => (
                    <label key={weight.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(`weight-${weight.value}`)}
                        onChange={() => {
                          handleFilterClick('weight', weight.value);
                          onWeightChange(weight.value);
                        }}
                        className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                      />
                      <span className="text-sm text-gray-700">{weight.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discount */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Discount Offers</h4>
                <div className="space-y-2">
                  {discounts.map((discount) => (
                    <label key={discount.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(`discount-${discount.value}`)}
                        onChange={() => {
                          handleFilterClick('discount', discount.value);
                          onDiscountChange(discount.value);
                        }}
                        className="w-4 h-4 text-[#E92247] border-gray-300 rounded focus:ring-[#E92247]"
                      />
                      <span className="text-sm text-gray-700">{discount.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
