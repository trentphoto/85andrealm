import axios from 'axios';
import { Product } from '@/types/types';

export const fetchProducts = async (baseUrl = ''): Promise<Product[]> => {
  const res = await axios.get(`${baseUrl}/api/products`);
  return res.data;
};
