import { Fragment } from 'react';

function Product({ title, price, image }) {
    return (
        <Fragment>
            <style>{`

            `}</style>
            <div className="product-card">
                <img src={process.env.API_URL + '/' +  image} alt={title + " Image Product"} />
            </div>
        </Fragment>
    )
}

export default Product;
