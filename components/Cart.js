import React from "react";
import { useAppContext } from "../useAppState";
import CheckoutForm from "./CheckoutForm";

function Cart() {
  const {state, actions} = useAppContext();
  const [cartItems, setCartItems] = React.useState([]);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setCartItems(actions.getCart());
    setIsClient(true);
  }, [cartItems]);

  const deleteCartItem = id => {
    if (confirm("You sure want to delete ?")) {
      actions.deleteCartItem(id);
    }
  };

  let formElement = <div />;
  if (isClient) formElement = <CheckoutForm />;

  return (
    <React.Fragment>
      <style>{`
                #cart-container {
                    height: 100vh;
                    width: 320px;
                    padding: 24px;
                    padding-bottom: 40px;
                    z-index: 11; overflow-y: scroll;
                    background: #fcfcfc;
                    box-shadow: -2px 0 4px 0 #efefef;
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    transition: all .3s ease-in-out;
                }
                #cart-container h2 {
                    margin-left: 48px;
                }
                .cart-item-detail {
                    display: grid;
                    position: relative;
                    grid-template-columns: 1fr 1fr;
                    padding: 16px;
                    grid-gap: 24px;
                }
                .cart-item-detail img {
                    width: 80px;
                }
                .close-button {
                    position: absolute;
                    top: 28px;
                    left: 24px
                }
                .close-button:hover {
                  cursor: pointer;
                }
                .close-button h3 {
                  margin: 0;
                  color: #000;
                }
                #cart-container h6 {
                  margin: 0;
                }
                .sub-total {
                  margin: 8px 0;
                  color: #969696;
                  font-weight: 400;
                }
                .checkout-button {
                  border: none;
                  background: #A9EEC2;
                  color: #000000;
                  padding: 8px 12px;
                  font-weight: 400;
                }
                .delete-item-button {
                  margin: 0;
                  padding: 0;
                  width: 24px;
                  height: 24px;
                  padding: 2px;
                  position: absolute;
                  top: 0;
                  right: 0;
                  border: none;
                  background: #FF9E9E;
                  color: #FFF;
                  text-align: center;
                  border-radius: 50%;
                }
            `}</style>
      <div
        id="cart-container"
        style={{ right: state.showCart ? "0" : "-100%" }}
      >
        <div onClick={actions.toggleCart} className="close-button">
          <h3>X</h3>
        </div>
        <h2>Cart</h2>
        {cartItems.length < 1 && <h4>No item(s) on cart.</h4>}
        <div className="cart-items">
          {cartItems.reverse().map(item => (
            <div className="cart-item-detail" key={item._id}>
              <div
                className="delete-item-button"
                onClick={() => deleteCartItem(item._id)}
              >
                X
              </div>
              <img
                src={process.env.API_URL + item.images}
                alt={item.name + "image"}
              />
              <div style={{ margin: "auto" }}>
                <h6>
                  {item.name} ( {item.qty} )
                </h6>
                <h6 className="sub-total">
                  Sub Total : $ {item.qty * item.price}
                </h6>
              </div>
            </div>
          ))}
        </div>
        <h4 style={{ textAlign: "center" }}>
          Total : ${" "}
          {cartItems.reduce((prev, curr) => prev + curr.price * curr.qty, 0)}{" "}
        </h4>
        <div style={{ textAlign: "center", padding: "24px" }}>
          {formElement}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
