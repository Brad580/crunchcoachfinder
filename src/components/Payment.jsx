import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('EFT'); // EFT or PIF

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process payment here
    console.log('Processing payment...');
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h2>Payment</h2>
      {/* Payment form fields will go here */}
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="EFT"
            checked={paymentMethod === 'EFT'}
            onChange={() => setPaymentMethod('EFT')}
          />
          Electronic Funds Transfer (EFT)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="PIF"
            checked={paymentMethod === 'PIF'}
            onChange={() => setPaymentMethod('PIF')}
          />
          Pay in Full (PIF)
        </label>
      </div>
      <button type="submit">Proceed to Payment</button>
    </form>
  );
};

export default Payment;
