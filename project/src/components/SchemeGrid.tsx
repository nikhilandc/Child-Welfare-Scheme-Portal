import React from 'react';
import SchemeCard from './SchemeCard';
import { Scheme } from '../types';

interface SchemeGridProps {
  schemes: Scheme[];
}

export default function SchemeGrid({ schemes }: SchemeGridProps) {
  if (schemes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No schemes found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {schemes.map((scheme) => (
        <SchemeCard key={scheme.id} {...scheme} />
      ))}
    </div>
  );
}