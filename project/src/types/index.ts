export interface Scheme {
  id: string;
  title: string;
  description: string;
  eligibility: string;
  benefits: string;
  imageUrl: string;
  category: 'education' | 'health' | 'nutrition' | 'social';
  state?: string;
  deadline?: string;
}

export interface FilterOptions {
  category?: string;
  state?: string;
  searchQuery: string;
}