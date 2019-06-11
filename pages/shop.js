import Main from "../layouts/main";
import { Fragment, useState } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Product from "../components/Product";

function Shop({ products }) {
    const [ isListExpanded, setIsListExpanded ] = useState(false);
    console.log(isListExpanded);
  return (
    <Fragment>
      <style jsx="true" global="true">{`
                #shop {
                    margin-top: 160px;
                }
                .products {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    grid-gap: 24px;
                }
               #shop > ul {
                    height: 60px;
                    display: inline-block;
                    background: #FF9E9E;
                    color: #FFF;
                    padding: 8px;
                    padding-left: 16px;
                    padding-right: 72px;
                    position: fixed;
                    top: 12%;
               }
               #shop span {
                    background: #A9EEC2;
                    padding: 0 8px;
                    font-weight: 700;
                    position: absolute;
                    right: 16px;
                    margin: 6px;
                    font-size: 1.25rem;
               }
               #shop span:hover {
                    cursor: pointer;
               }
               #shop ul li {
                    margin: 8px 0;
               }
               #shop li {
                    margin: 16px 0;
                    font-size: 1.3rem;
                    font-weight: 700;
                    text-transform: uppercase;
               }
               .category-list-item {
                    display: inline-block;
                    transition: all .3s ease-in-out;
                    opacity: 0;
                    line-height: 2;
               }
           `}</style>
      <Main title="CLOF | Product Page">
        <article id="shop">
            <ul style={{ height: isListExpanded ? "auto": "60px" }}>
                <span onClick={() => setIsListExpanded(!isListExpanded)}>+</span>
                <li>All Products</li>
                <ul className="category-list-item" style={{
                    opacity: isListExpanded ? "1" : "0"
                }}>
                    <li>Outerwear</li>
                    <li>Accessories</li>
                </ul>
           </ul>
          <div className="products">
            {products.map((product, index) => (
              <Product
                key={index}
                id={product._id}
                image={product.images}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </article>
      </Main>
    </Fragment>
  );
}

Shop.getInitialProps = async ({ req }) => {
  const res = await fetch(process.env.API_URL + "/api/products");
  const json = await res.json();
  return { products: json };
};

export default Shop;
