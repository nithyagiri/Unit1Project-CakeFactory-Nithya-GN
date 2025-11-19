import { useState } from "react";
import "./payment.css";

const PaymentPage = ({ setCurrentPage, total }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const getCardBrand = () => {
    if (cardNumber.startsWith("4")) return "Visa";
    if (cardNumber.startsWith("5")) return "Mastercard";
    if (cardNumber.startsWith("3")) return "American Express";
    return "Card";
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (cardNumber.length < 16) return alert("Invalid card number.");
    if (!expiry.match(/^\d{2}\/\d{2}$/))
      return alert("Expiry must be MM/YY.");
    if (cvv.length < 3) return alert("Invalid CVV.");

    setShowSuccess(true);
    setTimeout(() => setCurrentPage("home"), 2000);
    
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">💳 Secure Payment</h2>

      {showSuccess && (
        <div className="payment-success">
          <h2>🎉 Payment Successful!</h2>
          <p>Your delicious cake order is confirmed.</p>
        </div>
      )}

      {/* Card Preview */}
      <div className="card-preview">
        <div className="chip"></div>
        <p className="card-brand">{getCardBrand()}</p>
        <p className="card-number-preview">
          {cardNumber ? cardNumber : "•••• •••• •••• ••••"}
        </p>
        <div className="card-bottom">
          <p>{cardName || "CARD HOLDER"}</p>
          <p>{expiry || "MM/YY"}</p>
        </div>
      </div>

      {/* Form */}
      <form className="payment-form" onSubmit={handlePayment}>
        <label>Name on Card</label>
        <input
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />

        <label>Card Number</label>
        <input
          maxLength="16"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ""))}
          required
        />

        <div className="row">
          <div className="col">
            <label>Expiry</label>
            <input
              placeholder="MM/YY"
              maxLength="5"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>

          <div className="col">
            <label>CVV</label>
            <input
              type="password"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              required
            />
          </div>
        </div>

        <h3 className="total">Total: ${total}</h3>

        <button className="pay-button">Pay Now</button>
      </form>

      <button className="back-button" onClick={() => setCurrentPage("checkout")}>
        ← Back to Checkout
      </button>
    </div>
  );
};

export default PaymentPage;