import React, { useState } from "react";
import "./BuyTokens.css";

const BuyTokens = () => {
  const [tokenAmount, setTokenAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleAmountChange = (e) => {
    setTokenAmount(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tokens Purchased: ${tokenAmount}\nPayment Method: ${paymentMethod}`);
  };

  return (
    <div className="buy-tokens-container">
      <div className="buy-tokens-header">
        <h1>Buy Tokens</h1>
        <p>Get tokens for your trending tweets and earn rewards!</p>
      </div>

      <form className="buy-tokens-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="token-amount">Amount of Tokens</label>
          <input
            type="number"
            id="token-amount"
            name="token-amount"
            value={tokenAmount}
            onChange={handleAmountChange}
            placeholder="Enter the number of tokens"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="payment-method">Select Payment Method</label>
          <select
            id="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentChange}
            required
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">Cryptocurrency</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Buy Tokens</button>
      </form>
    </div>
  );
};

export default BuyTokens;
