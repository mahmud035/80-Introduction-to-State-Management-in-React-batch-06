import React from 'react';
import { useContext } from 'react';
import Loading from '../components/Loading';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductProvider';

const Home = () => {
  const {
    state: { products, loading, error },
  } = useContext(ProductContext);

  // console.log(products);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  if (loading && error && products.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {products.map((product, index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Home;
