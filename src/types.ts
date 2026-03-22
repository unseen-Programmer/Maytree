export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Tea' | 'Chillies' | 'Blends';
  price: number;
  moq: string;
  image: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Enquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  requirements: string;
  status: 'New' | 'Contacted' | 'Closed';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface HomepageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText: string;
}
