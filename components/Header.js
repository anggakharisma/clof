import { Fragment } from "react";
import Logo from "./Logo";
import Link from "next/link";
export default Header => (
  <Fragment>
    <style>{`
      header {
        max-width: 100%;
        background: #FFFFFF;
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
    `}</style>

    <header className="header">
      <nav>
        <Logo />
        <ul>
          <li>
            <Link href="/shop">
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
    </header>
  </Fragment>
);
