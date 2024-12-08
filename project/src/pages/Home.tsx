import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SchemeFilters from '../components/SchemeFilters';
import SchemeGrid from '../components/SchemeGrid';
import { useSchemes } from '../hooks/useSchemes';
import { FilterOptions } from '../types';

export default function Home() {
  const [filters, setFilters] = React.useState<FilterOptions>({
    searchQuery: '',
    category: undefined,
    state: undefined,
  });

  const { data: schemes, isLoading } = useSchemes(filters);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero onSearch={(query) => setFilters({ ...filters, searchQuery: query })} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Schemes</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore various welfare schemes designed to support child development and well-being
          </p>
        </div>

        <SchemeFilters
          filters={filters}
          onFilterChange={setFilters}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <SchemeGrid schemes={schemes || []} />
        )}
      </motion.div>
    </div>
  );
}