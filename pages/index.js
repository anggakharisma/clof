import Main from "../layouts/main.js";
import { Fragment } from "react";
import HeroHeader from "../components/HeroHeader.js";
import NewCollection from "../components/NewCollection";
import HotItem from "../components/HotItem";
import { useAppContext } from "../useAppState";

function Index() {
    return (
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
}

export default Index;
