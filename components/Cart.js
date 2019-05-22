import React from "react";
import { useAppContext } from "../useAppState";

function Cart() {
  const { state, actions } = useAppContext();
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    setCartItems(actions.getCart());
  });

  return (
    <React.Fragment>
      <style>{`
                #cart-container {
                    height: 100vh;
                    width: 320px;
                    padding: 24px;
                    z-index: 11;
                    overflow-y: scroll;
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
                    color: #FF9E9E;
                }
                .cart-item-detail {
                    display: grid;
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
                    color: #FF9E9E;
                }
                .close-button:hover {
                  cursor: pointer;
                }
                .close-button h3 {
                  margin: 0;
                  color: #FF9E9E;
                }
                #cart-container h6 {
                  margin: 0;
                } 
                .sub-total {
                  margin: 8px 0;
                  color: #969696;
                  font-weight: 400;
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
        <div className="cart-items">
          {cartItems.reverse().map(item => (
            <div className="cart-item-detail" key={item._id}>
              <img
                src={process.env.API_URL + item.images}
                alt={item.name + "image"}
              />
              <div style={{ margin: "auto" }}>
                <h6>
                  {item.name} ( {item.qty} )
                </h6>
                <h6 className="sub-total">
                  Sub Total : {item.qty * item.price}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cart;
