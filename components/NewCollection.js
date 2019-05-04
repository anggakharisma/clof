import { Fragment } from "react";
import Masonry from "react-masonry-component";

export default () => (
  <Fragment>
    <style jsx global>{`
      #new-collection {
        overflow: hidden;
        background: #fad284;
        border-top: 24px solid white;
        border-bottom: 24px solid white;
        height: 100%;
        width: 100%;
        max-width: 100%;
        position: relative;
        padding: 64px;
      }
      #new-collection h1 {
        position: absolute;
        left: 25%;
        margin: 0;
        font-size: 4em;
        color: #ffffff;
        z-index: 30;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-weight: 600;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .grid-item {
        width: 25vw;
      }
      .grid-item-2 {
        width: 44%;
      }
      .grid-item-3 {
        width: 19%;
      }
      img:hover {
        cursor: pointer;
      }
    `}</style>
    <section id="new-collection">
      <h1>
        New <br /> Collection
      </h1>
      <Masonry
        style={{ maxWidth: "100%", margin: "0 auto", marginLeft: "15vw" }}
        options={{ itemSelector: ".grid-item", columnWidth: 60 }}
      >
        <div className="grid-item">
          <img src="/static/image4.jpg" />
        </div>
        <div className="grid-item grid-item-2">
          <img src="/static/image5.jpg" />
        </div>
        <div className="grid-item grid-item-3">
          <img src="/static/image1.jpg" />
        </div>
        <div className="grid-item grid-item-3">
          <img src="/static/image1.jpg" />
        </div>
      </Masonry>
    </section>
  </Fragment>
);
