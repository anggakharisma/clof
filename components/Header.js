import { Fragment, useState, useEffect } from "react";
import { useAppContext } from '../useAppState';
import Logo from "./Logo";
import Link from "next/link";

function Header() {
    const [ cartLength, setCartLength ] = useState(0);
    const { state, actions } = useAppContext();
    useEffect(() => {
        setCartLength(actions.getCart().length);
    });
    return (
      <Fragment>
        <style>{`
          header {
            max-width: 100%;
            background: #FFFFFF;
            position: fixed;
            z-index: 10;
            right: 0;
            left: 0;
            top: 0;
            border-bottom: 2px solid #A9EEC2;
            display: flex;
            justify-content: space-between;
          }
          h2 {
            padding: 0;
            margin: 0;
          }
          nav {
            display: flex;
            align-items: center;
          }
          ul {
            display: flex;
            list-style-type: none;
          }
          li {
            margin: 0 24px;
            font-weight: 600;
          }
          li a {
            text-decoration: none;
            color: #000000;
            padding-bottom: 4px;
            transition: all .2s linear;
          }
          li a:hover {
            border-bottom: 3px solid black;
          }
          .cart-trigger {
            margin-right: 80px;
          }
        `}</style>

        <header className="header">
          <nav>
            <Logo />
            <ul>
              <li>
                <Link href="/shop" prefetch>
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="cart-trigger">
            <h4 onClick={actions.toggleCart}>Cart({ cartLength })</h4>
          </div>
        </header>
      </Fragment>
    );
}

export default Header;
