import { Fragment, Component, useState } from 'react';
import Link from 'next/link';

function Product({ image, name, id, price }) {
    const [bgColor, setBgColor] = useState(["#FFFFFF", "#FF9E9E", "#fad284", "#A9EEC2"]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <Fragment>
            <style>{`
                .product-card {
                    margin: auto;
                    width: 75%;
                    padding: 24px;
                    transition: all .1s ease-in-out;
                    border-radius: 16px;
                }
                .product-card:hover {
                    cursor: pointer;
                }
                .product-card h3 {
                    text-align: center;
                }
            `}</style>
            <Link href={"/product/" + id}>
                <div className="product-card" style={{ backgroundColor: bgColor[selectedIndex] }} onMouseOver={() => {
                    setSelectedIndex(Math.floor(Math.random() * 3) + 1);
                }} onMouseOut={() => {
                    setSelectedIndex(0);
                }}>
                    <img src={process.env.API_URL + '/' + image} alt={name + " Image Product"} />
                    <h3>{name}</h3>
                    {!image && <h1>Loading</h1>}
                </div>
            </Link>
        </Fragment>
    )
}

export default Product;
