import Main from '../layouts/main';
import { Fragment } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Product from '../components/Product';

function Shop({ products }) {
    return (
       <Fragment>
           <style>{`
                #shop {
                    margin-top: 160px;
                }
                .products {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 24px;
                }
                #shop h1 {
                    font-size: 1.5rem;
                    margin-left: 32px;
                    border-right: 16px solid #A9EEC2;
                    font-weight: 700;
                    color: #FFFFFF;
                    background: #FF9E9E;
                    padding: 16px 24px;
                    display: inline-block;
                    position: fixed;
                    top: 10%;
                    text-align: center;
                }
           `}</style>
          <Main title="CLOF | Product Page">
            <article id="shop">
                <h1>ALL PRODUCTS</h1>
                <div className="products">
                    {products.map((product, index) => ( <Product key={index} id={product._id} image={ product.images } name={product.name} price={product.price} /> ))}
                </div>
            </article>
          </Main>
      </Fragment>
    )
}

Shop.getInitialProps = async ({ req }) => {
    const res = await fetch(process.env.API_URL + "/api/products");
    const json = await res.json();
    return { products: json }
}

export default Shop;
