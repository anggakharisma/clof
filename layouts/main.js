import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import Head from "next/head";

export default ({ children, title = "CLOF | Clothing Store" }) => {
    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
          <link
            href="https://fonts.googleapis.com/css?family=Dosis:700|Nunito:300,400,600,700,800"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: "Nunito", san-serif;
          }
          body,
          html {
            margin: 0;
            padding: 0;
            min-height: 100%;
            width: 100%;
            height: 100%;
          }
          main {
            max-width: 95%;
            margin: 0 auto;
            margin-top: 64px;
            min-height: 100%;
          }
          img {
            max-width: 100%;
          }
          #__next {
            min-height: 100%;
            height: 100%;
          }
        `}</style>
        <Header />
        <main>{children}</main>
        <Footer />
      </Fragment>
    )
};
