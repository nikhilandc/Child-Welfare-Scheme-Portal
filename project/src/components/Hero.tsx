import React from 'react';
import { ArrowDown } from 'lucide-react';
import SearchBar from './SearchBar';

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  return (
    <div className="relative bg-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Child Welfare Schemes Portal
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Access comprehensive information about state and national-level schemes benefiting children
          </p>
          <div className="mt-10">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </div>
  );
}