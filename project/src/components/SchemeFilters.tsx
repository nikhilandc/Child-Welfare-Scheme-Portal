import React from 'react';
import { FilterOptions } from '../types';

interface SchemeFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export default function SchemeFilters({ filters, onFilterChange }: SchemeFiltersProps) {
  const categories = ['All', 'Education', 'Health', 'Nutrition', 'Social'];
  const states = ['All', 'National', 'State'];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select
        className="px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
        value={filters.category || 'All'}
        onChange={(e) => onFilterChange({ ...filters, category: e.target.value !== 'All' ? e.target.value.toLowerCase() : undefined })}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        className="px-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
        value={filters.state || 'All'}
        onChange={(e) => onFilterChange({ ...filters, state: e.target.value !== 'All' ? e.target.value : undefined })}
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}