import Main from '../layouts/main';
import { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Product from '../components/Product';

function Shop({ products }) {
    return (
       <Fragment>
           <style>{`
                #shop {
                    margin-top: 80px;
                }
           `}</style>
          <Main>
            <article id="shop">
                <h2>All Products</h2>
                <div className="products">
                    {products.map(product => ( <Product image={ product.images } /> ))}
                </div>
            </article>
          </Main>
      </Fragment>
    )
}

Shop.getInitialProps = async ({ req }) => {
    const res = await fetch(process.env.API_URL + "/products");
    const json = await res.json();
    return { products: json }
}

export default Shop;
