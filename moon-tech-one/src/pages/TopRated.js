import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import ProductCard from '../components/ProductCard';

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useContext(ProductContext);

  console.log(products);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>List is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products
      ?.filter((product) => product.rating > 4)
      .map((product, index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {/* <h1>This is home page: {products.length}</h1> */}

      {/* {products?.map((product, index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))} */}

      {content}
    </div>
  );
};

export default TopRated;
