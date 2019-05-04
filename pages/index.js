import Main from "../layouts/main.js";
import { Fragment } from "react";
import HeroHeader from "../components/HeroHeader.js";
import NewCollection from "../components/NewCollection";

export default () => (
  <Fragment>
    <style>{`
      article {
        height: 100%;
      }
    `}</style>
    <Main>
      <article>
        <HeroHeader />
        <NewCollection />
      </article>
    </Main>
  </Fragment>
);
