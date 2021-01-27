import React, { useRef, useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer, handleSumTotal } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    // prettier-ignore
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item, i) => (
          <div className="Information-item" key={item.title + i}>
            <div className="Information-element">
              <h4>{item.name}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <h3>{`Precio total: $ ${handleSumTotal(cart)}`}</h3>
      </div>
    </div>
  );
};

export default Information;
