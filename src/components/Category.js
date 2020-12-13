import React, { Component } from 'react';
import { productData } from '../data/productData';
import Product from './Product';

class Category extends Component {

    getProductList = () => {
        return productData.map((product, i) => {
            return (
                <>
                    {(i) % 5 == 0 ? <div className="col-md-1"></div> : null}
                    <div className="col-md-2">
                        <Product name={product.name} path={product.path} />
                    </div>
                    {(i + 1) % 5 == 0 ? <div className="col-md-1"></div> : null}
                </>
            )
        })
    }
    render() {
        return (
            <div style={{ marginTop: "15px" }}>
                <div className="row">
                    {this.getProductList()}
                </div>
            </div>
        );
    }
}

export default Category;