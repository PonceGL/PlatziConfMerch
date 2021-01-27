import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder, handleSumTotal } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <h3>{`Precio total: $ ${handleSumTotal(cart)}`}</h3>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
