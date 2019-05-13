import React from 'react';


function Cart() {
    const [showCart, setShowCart] = React.useState(false);
    return (
        <React.Fragment>
            <style>{`
                #cart-container {
                    height: 100vh;
                    width: 30%;
                    padding: 24px;
                    z-index: 11;
                    background: #FFFFFF;
                    box-shadow: -7px 0 4px #efefef;
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                }
            `}</style>
            <div id="cart-container">
                <h2>Cart</h2>
            </div>
        </React.Fragment>
    )
}

export default Cart;
