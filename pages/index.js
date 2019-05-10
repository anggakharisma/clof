import Main from "../layouts/main.js";
import { Fragment } from "react";
import HeroHeader from "../components/HeroHeader.js";
import NewCollection from "../components/NewCollection";
import HotItem from "../components/HotItem";

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
        <HotItem />
      </article>
    </Main>
  </Fragment>
);
