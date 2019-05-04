import { Fragment } from "react";

export default () => (
  <Fragment>
    <style>{`
        #new-collection {
            background: #FAD284;
            border-top: 24px solid white;
            border-bottom: 24px solid white;
            height: 75%;
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        #new-collection h1 {
            position: absolute;
            left: 0;
        }
      `}</style>
    <section id="new-collection">
      <h1>
        New <br /> Collection
      </h1>
      <div className="image-layout" />
    </section>
  </Fragment>
);
