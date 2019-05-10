import { Fragment, Component } from 'react';
import Link from 'next/link';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            color: ["#FFFFFF","#FF9E9E", "#fad284", "#A9EEC2"],
            selectedIndex: 0
        }
    }
    render() {
        const { image, name, id, price } = this.props;
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
                    <div className="product-card" style={{ backgroundColor: this.state.color[this.state.selectedIndex] }} onMouseOver={() => {
                        this.setState({ selectedIndex: Math.floor(Math.random() * 3) + 1 });
                    }} onMouseOut={() => {
                        this.setState({ selectedIndex: 0 })
                    }}>
                            <img src={process.env.API_URL + '/' +  image} alt={name + " Image Product"} />
                            <h3>{name}</h3>
                            {!image && <h1>Loading</h1>}
                    </div>
                </Link>
            </Fragment>
        )
    }
}

export default Product;
