import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import db from '../db.json';

const ProductListingPage = () => {
    // console.log(db);
    const [productData, setProductData] = useState({});

    useEffect(() => {
      setProductData(db);
    }, []);

    // console.log(productData);

  return (
    <div>
      {
        productData?.data && productData.data.map((products, index) => (
          <ProductCard key={index} products={products} />
        ))
      }
    </div>
  );
}

export default ProductListingPage;
