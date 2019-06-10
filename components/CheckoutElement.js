import React from "react";
import {
  injectStripe,
  CardElement,
  PaymentRequestButtonElement
} from "react-stripe-elements";

function CheckoutElement() {
  const handleSubmitCheckout = (e) => {
      e.preventDefault();
      console.log("yeet");
  }

  return (
    <React.Fragment>
      <style>{`
        `}</style>
      <div id="checkout-form">
        <h3>Checkout</h3>
        <form onSubmit={handleSubmitCheckout}>
          <CardElement />
          <button type="submit" style={{ background: "#FFF", marginTop: "16px", padding: "8px", border: '1px solid #000' }}>Pay</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default injectStripe(CheckoutElement);
