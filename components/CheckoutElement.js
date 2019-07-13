import React from "react";
import {
  injectStripe,
  CardElement,
} from "react-stripe-elements";
import fetch from 'isomorphic-fetch';

function CheckoutElement({ stripe, cartTotal }) {
  const handleSubmitCheckout = async (e) => {
    e.preventDefault();
    let { token } = await stripe.createToken({ name: "Ricky Martin 2" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token.id, amount: cartTotal })
    });
    if (response.ok) {
      alert("Purchase Completed");
    } else {
      console.log(response);
    }
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
