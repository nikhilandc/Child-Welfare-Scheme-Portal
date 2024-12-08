import { useQuery } from 'react-query';
import { schemes } from '../data/schemes';
import { FilterOptions, Scheme } from '../types';

export function useSchemes(filters: FilterOptions) {
  return useQuery(['schemes', filters], async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return schemes.filter((scheme) => {
      const matchesSearch = filters.searchQuery
        ? scheme.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          scheme.description.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          scheme.eligibility.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
          scheme.benefits.toLowerCase().includes(filters.searchQuery.toLowerCase())
        : true;

      const matchesCategory = filters.category
        ? scheme.category === filters.category
        : true;

      const matchesState = filters.state
        ? scheme.state === filters.state
        : true;

      return matchesSearch && matchesCategory && matchesState;
    });
  });
}