import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-item">
          <div className="Cheackout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
