import React, { useState, useEffect } from 'react';
import { Product, Category, Enquiry, Testimonial, HomepageContent } from '../types';
import { INITIAL_PRODUCTS, CATEGORIES, TESTIMONIALS, HOMEPAGE_CONTENT } from '../data/mockData';

// Mock Service to simulate Firebase behavior using LocalStorage
export const useDataService = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('tea_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('tea_categories');
    return saved ? JSON.parse(saved) : CATEGORIES;
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    const saved = localStorage.getItem('tea_enquiries');
    return saved ? JSON.parse(saved) : [];
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('tea_testimonials');
    return saved ? JSON.parse(saved) : TESTIMONIALS;
  });

  const [homeContent, setHomeContent] = useState<HomepageContent>(() => {
    const saved = localStorage.getItem('tea_home_content');
    return saved ? JSON.parse(saved) : HOMEPAGE_CONTENT;
  });

  useEffect(() => {
    localStorage.setItem('tea_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('tea_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('tea_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('tea_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('tea_home_content', JSON.stringify(homeContent));
  }, [homeContent]);

  // Actions
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Math.random().toString(36).substr(2, 9) };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addEnquiry = (enquiry: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => {
    const newEnquiry: Enquiry = {
      ...enquiry,
      id: Math.random().toString(36).substr(2, 9),
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setEnquiries([newEnquiry, ...enquiries]);
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status } : e));
  };

  return {
    products,
    categories,
    enquiries,
    testimonials,
    homeContent,
    addProduct,
    updateProduct,
    deleteProduct,
    addEnquiry,
    updateEnquiryStatus,
    setHomeContent,
    setTestimonials
  };
};
