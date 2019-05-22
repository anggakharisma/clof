import { Fragment } from "react";
import Link from "next/link";

export default () => (
  <Fragment>
    <style>{`
      #main-hero {
        background: #FF9E9E;
        border-top: 24px solid white;
        border-bottom: 24px solid white;
        height: 90vh;
        width: 100%;
        max-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #main-hero h1 {
        font-size: 4.75em;
        margin: 0;
        padding: 0;
        color: #FFF;
      }
      .image img {
        width: 85%;
      }
      .call-to-action {
        background: #FAD284;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: none;
        padding: 12px 20px;
        color: #FFFFFF;
        font-size: 1.3em;
        font-weight: 500;
        position: absolute;
        transition: all .1s ease-in-out;
        border-radius: 2px;
        border: 4px solid #fff;
      }
      .call-to-action:hover {
        cursor: pointer;
        border-bottom-left-radius: 24px;
      }
      svg {
        position: absolute;
      }
      .image {
        margin-left: calc(100vw / 10);
        display: flex;
        justify-content: flex-end;
        position: relative;
        align-items: center;
      }
      @media (max-width: 768px) {
        #main-hero {
          padding: 24px;
        }
      }
    `}</style>
    <section id="main-hero">
      <h1>
        Clothes <br /> For <br /> All
      </h1>
      <div className="image">
        <img src="/static/clothes-hero.png" />
        <Link href="/shop">
          <button className="call-to-action">shop now</button>
        </Link>
      </div>
    </section>
  </Fragment>
);
