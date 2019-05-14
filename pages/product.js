import { Fragment, useEffect } from 'react';
import Main from '../layouts/main';
import fetch from 'isomorphic-unfetch';
import { useAppContext } from '../useAppState';

function Product({ product }) {
    const { state, actions } = useAppContext();
    return (
        <Fragment>
            <style>{`
                #product-main {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 40px;
                }
                #product-main img {
                    width: 70%;
                    margin: auto;
                }
            `}</style>
            <Main title={product.name}>
                <div id="product-main">
                    <img src={`${process.env.API_URL}${product.images}`} alt="Product main" />
                    <div className="product-detail">
                        <h1>{product.name}</h1>
                        <h3>$ {product.price}</h3>
                        <button onClick={() => actions.addToCart(product)}>Add To Cart</button>
                    </div>
                </div>
            </Main>
        </Fragment>
    )
}

Product.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(process.env.API_URL + `/api/products/${id}`);
    const product = await res.json();
    return { product }
}

export default Product;
