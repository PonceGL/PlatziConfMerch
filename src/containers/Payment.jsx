import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'AVXKClwaOwf6Qwv1jNeWuu3bjbavS62KF5_TcsIpv-PYDUBGiZYOkcTnchx5v1vhCWZK3Ljgn8moqRD0',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonsStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const hadlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <h4>{item.title}</h4>
            <span>$ {item.price}</span>
          </div>
        ))}

        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonsStyles}
            amount={handleSumTotal}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => hadlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
