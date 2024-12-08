import { Scheme } from '../types';

export const schemes: Scheme[] = [
  {
    id: 'icds',
    title: "Integrated Child Development Services (ICDS)",
    description: "Comprehensive early childhood care and development program",
    eligibility: "Children under 6 years, pregnant women, and lactating mothers",
    benefits: "Supplementary nutrition, immunization, health check-ups, and pre-school education",
    imageUrl: "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?auto=format&fit=crop&q=80&w=1000",
    category: 'health',
    deadline: '2024-12-31'
  },
  {
    id: 'mdm',
    title: "Mid-Day Meal Scheme",
    description: "School meal program to improve nutritional status of children",
    eligibility: "Children studying in primary and upper primary classes in government schools",
    benefits: "Free hot cooked meal meeting nutritional standards on school days",
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1000",
    category: 'nutrition',
    state: 'National'
  },
  {
    id: 'bbbp',
    title: "Beti Bachao Beti Padhao",
    description: "Initiative to address declining child sex ratio and promote girl child education",
    eligibility: "Girl children and their families",
    benefits: "Educational incentives, awareness programs, and financial support",
    imageUrl: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=1000",
    category: 'education',
    state: 'National'
  }
];