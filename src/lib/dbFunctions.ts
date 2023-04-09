import pool from './db';

export const getProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};
