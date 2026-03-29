import { Product, Category, Testimonial, HomepageContent } from '../types';

// ================= PRODUCTS =================
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Orthodox Tea',
    description: 'Premium Assam orthodox tea with rich aroma and strong flavor.',
    category: 'Tea',
    price: 120,
    moq: '50kg',
    image: '/images/img_1.png',
    featured: true,
  },
  {
    id: '2',
    name: 'Green Tea',
    description: 'Fresh and antioxidant-rich green tea with a clean natural taste.',
    category: 'Tea',
    price: 100,
    moq: '30kg',
    image: '/images/img_2.png',
    featured: true,
  },
  {
    id: '3',
    name: 'King Chilli (Bhut Jolokia)',
    description: 'One of the world’s hottest chillies with intense heat and bold flavor.',
    category: 'Chillies',
    price: 80,
    moq: '100kg',
    image: '/images/img_3.png',
    featured: true,
  },
  {
    id: '4',
    name: 'Oven-Dried King Chilli',
    description: 'Carefully dried to maintain consistency, color, and long shelf life.',
    category: 'Chillies',
    price: 90,
    moq: '100kg',
    image: '/images/img_4.png',
  },
  {
    id: '5',
    name: 'Smoke-Dried King Chilli',
    description: 'Traditional smoke-drying technique adds deep bold flavor and aroma.',
    category: 'Chillies',
    price: 110,
    moq: '100kg',
    image: '/images/img_5.png',
  },
  {
    id: '6',
    name: 'King Chilli Powder',
    description: 'Finely ground chilli powder with strong aroma, color, and pungency.',
    category: 'Chillies',
    price: 70,
    moq: '50kg',
    image: '/images/img_3.png',
  }
];

// ================= CATEGORIES =================
export const CATEGORIES: Category[] = [
  { id: '1', name: 'Tea', slug: 'tea' },
  { id: '2', name: 'Chillies', slug: 'chillies' },
];

// ================= TESTIMONIALS =================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Vogt',
    role: 'Procurement Director',
    company: 'EuroTea Imports',
    content:
      'Exceptional quality and consistency. The orthodox tea meets all our international standards.',
    avatar: 'https://i.pravatar.cc/150?u=alex',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Artisan Brews HK',
    content:
      'Reliable supplier with premium packaging and authentic products. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  }
];

// ================= HOMEPAGE =================
export const HOMEPAGE_CONTENT: HomepageContent = {
  heroTitle: 'Premium Tea & Spice Manufacturing',
  heroSubtitle:
    'Export-quality tea and chilli products crafted in Assam for global markets.',
  aboutTitle: 'Our Manufacturing Excellence',
  aboutText:
    'We specialize in producing high-quality tea and spice products with strict quality control, ensuring consistency, purity, and global export standards.',
};  