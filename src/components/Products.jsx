import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  //Una funcion que llama a otra fincion, es un closure
  //La ejecución del closure retorna otra función o callback que esta listo para ser ejecutado. En el caso del ejemplo cuando se ejecuta el método render del componente se ejecuta el closure y retorna otra función y es en el onClick que se ejecuta la función previamente retornada. El closure retorna la función más no la ejecuta.Por otro lado, la ejecución del la función tradicional no retorna nada porque ya se ejecuta de una vez addToCart.

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
