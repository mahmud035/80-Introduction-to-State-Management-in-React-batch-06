import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { initialState, productReducer } from '../state/reducers/productReducer';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: 'FETCHING_START' });

    fetch('products.json')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({ type: 'FETCHING_SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FETCHING_ERROR' });
      });
  }, []);

  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
