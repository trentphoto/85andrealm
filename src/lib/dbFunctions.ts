import pool from './db';

export const getProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

export const getCategories = async () => {
  const result = await pool.query('SELECT * FROM categories');
  return result.rows;
};

export const getTestimonials = async () => {
  const result = await pool.query('SELECT * FROM testimonials');
  return result.rows;
};

export const getPosts = async () => {
  const result = await pool.query('SELECT * FROM blog_posts');
  return result.rows;
};

export const getPost = async (id: string) => {
  const result = await pool.query(`SELECT * FROM blog_posts WHERE id = ${id}`);
  return result.rows[0];
};

export const getProduct = async (id: string) => {
  const result = await pool.query(`SELECT * FROM products WHERE id = ${id}`);
  return result.rows[0];
};
