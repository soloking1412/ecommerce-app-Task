'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Image src={product.imageUrl} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
