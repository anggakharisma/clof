import { Fragment, useEffect } from "react";
import Main from "../layouts/main";
import fetch from "isomorphic-unfetch";
import { useAppContext } from "../useAppState";

function Product({ product }) {
  const { state, actions } = useAppContext();
  return (
    <Fragment>
      <style>{`
                #product-main {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));;
                    padding: 40px;
                }
                #product-main img {
                    width: 70%;
                    margin: auto;
                }
                .product-button {
                    background: #FFF;
                    border: 1px solid #000;
                    color: #000;
                    padding: 8px 16px;
                    transition: all .2s ease-in-out;
                }
                .product-button:hover {
                    background: #000;
                    color: #FFF;
                    cursor: pointer;
                }
            `}</style>
      <Main title={product.name}>
        <div id="product-main">
          <img
            src={`${process.env.API_URL}${product.images}`}
            alt="Product main"
          />
          <div className="product-detail">
            <h1>{product.name}</h1>
            <h3>$ {product.price}</h3>
            <button
              className="product-button"
              onClick={() => actions.addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Main>
    </Fragment>
  );
}

Product.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(process.env.API_URL + `/api/products/${id}`);
  const product = await res.json();
  return { product };
};

export default Product;
