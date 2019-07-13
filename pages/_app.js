import React from "react";
import { AppContext, useAppState } from "../useAppState";

function MainApp({ Component, pageProps }) {
  const { state, actions } = useAppState();
  return (
    <AppContext.Provider value={{ state, actions }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

MainApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MainApp;
