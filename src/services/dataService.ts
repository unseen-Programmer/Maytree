import { INITIAL_PRODUCTS, HOMEPAGE_CONTENT } from '../data/mockData';

export const useDataService = () => {
  return {
    products: INITIAL_PRODUCTS,
    homeContent: HOMEPAGE_CONTENT,
  };
};