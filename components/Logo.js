import { Fragment } from 'react';
import Link from 'next/link';
export default Logo => (
  <Fragment>
    <style>{`
      .logo {
        background: #A9EEC2;
        height: 100%;
        padding: 14px 48px;
      }
      .logo:hover {
        cursor: pointer;
      }
      h2 {
        font-family: Dosis, sans-serif;
        font-weight: 700;
      }
    `}</style>
    <Link href="/" prefetch>
      <div className="logo">
        <h2>CLOF</h2>
      </div>
    </Link>
  </Fragment>
)
