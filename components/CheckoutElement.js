import React from "react";
import {
  injectStripe,
  CardElement,
} from "react-stripe-elements";
import fetch from 'isomorphic-fetch';

function CheckoutElement({ stripe }) {
  const handleSubmitCheckout = async (e) => {
      e.preventDefault();
      let { token } = await stripe.createToken({ name: "Ricky Martin 2" });
      let response = await fetch(process.env.API_URL + "/charge", {
          method: "POST",
          headers: { "Content-Type": "text/plain" },
          body: token.id
      });
      if(response.ok) {
          console.log("Purchase Completed");
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
