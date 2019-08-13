import { StripeProvider, Elements } from "react-stripe-elements";

import CheckoutElement from "./CheckoutElement";

export default ({ cartTotal }) => (
  <StripeProvider apiKey="pk_test_h0Sirn7s2uSgJxwmxg7AWQpO">
    <Elements>
      <CheckoutElement cartTotal={cartTotal} />
    </Elements>
  </StripeProvider>
);
