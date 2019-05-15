import React from 'react';
import { useAppContext } from '../useAppState';


function Cart() {
    const { state, actions } = useAppContext();

    return (
        <React.Fragment>
            <style>{`
                #cart-container {
                    height: 100vh;
                    width: 320px;
                    padding: 24px;
                    z-index: 11;
                    background: #fcfcfc;
                    box-shadow: -2px 0 4px 0 #efefef;
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    transition: all .3s ease-in-out;
                }
            `}</style>
            <div id="cart-container" style={{ right: state.showCart ? '0': '-100%' }} onClick={actions.toggleCart}>
                <h2>Cart</h2>
                <div className="cart-items">
                    <div className="cart-item-card">
                        <img src="" />
                        <h3>Product Name</h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart;
