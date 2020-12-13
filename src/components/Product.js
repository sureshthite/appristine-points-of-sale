import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { name, path } = this.props;
        return (
            <div className="card card-curve">
                <div className="card-body">
                    <div style={{ height: "100px" }}>
                        <img src={`../img/${path}`} alt={name} className="product-responsive" />
                    </div>
                    <span>{name}</span>
                </div>
            </div>
        );
    }
}

export default Product;