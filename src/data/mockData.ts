import { Product, Category, Testimonial, HomepageContent } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Imperial Golden Needle',
    description: 'A rare, high-altitude black tea with honey-sweet notes and a velvety finish.',
    category: 'Tea',
    price: 120,
    moq: '50kg',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '2',
    name: 'Kashmiri Saffron Blend',
    description: 'Premium green tea infused with hand-picked saffron strands and aromatic spices.',
    category: 'Blends',
    price: 180,
    moq: '25kg',
    image: 'https://images.unsplash.com/photo-1544787210-228394c3d3e0?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '3',
    name: 'Guntur Sannam S4',
    description: 'World-renowned hot chillies with deep red color and intense pungency.',
    category: 'Chillies',
    price: 45,
    moq: '500kg',
    image: 'https://images.unsplash.com/photo-1588253518679-1293149914ed?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: '4',
    name: 'Silver Moon Jasmine',
    description: 'Hand-rolled white tea pearls scented with seven layers of fresh jasmine blossoms.',
    category: 'Tea',
    price: 150,
    moq: '20kg',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Byadgi Stemless',
    description: 'Premium low-heat chillies known for their deep red color and wrinkled texture.',
    category: 'Chillies',
    price: 55,
    moq: '200kg',
    image: 'https://images.unsplash.com/photo-1599331006434-71869894264b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Royal Earl Grey',
    description: 'Bold Assam black tea blended with pure Italian Bergamot oil.',
    category: 'Blends',
    price: 85,
    moq: '100kg',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800',
  }
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Tea', slug: 'tea' },
  { id: '2', name: 'Chillies', slug: 'chillies' },
  { id: '3', name: 'Blends', slug: 'blends' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Vogt',
    role: 'Procurement Director',
    company: 'EuroTea Imports',
    content: 'The quality of the Imperial Golden Needle is unmatched. Their export standards are the highest we have encountered in the industry.',
    avatar: 'https://i.pravatar.cc/150?u=alex',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Artisan Brews HK',
    content: 'Reliable sourcing and impeccable packaging. Our customers love the Kashmiri Saffron Blend.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  }
];

export const HOMEPAGE_CONTENT: HomepageContent = {
  heroTitle: 'Exquisite Sourcing. Global Excellence.',
  heroSubtitle: 'Premium wholesale tea and spices for the world\'s most discerning brands.',
  aboutTitle: 'Our Heritage of Quality',
  aboutText: 'For over three decades, we have bridged the gap between the finest estates and global markets, ensuring every leaf and spice meets the gold standard of export quality.',
};
