import { useQuery } from 'react-query';
import { schemes } from '../data/schemes';

export function useScheme(id: string) {
  return useQuery(['scheme', id], async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return schemes.find(scheme => scheme.id === id);
  });
}