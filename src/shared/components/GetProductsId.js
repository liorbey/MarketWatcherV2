import React, { Fragment } from 'react'
import ProductPrices from './ProductPrices';

const GetProductsId = props =>{
    
    return(
        <Fragment>
        {props.productz.map(product=>(
            <ProductPrices
            productID = {product.id}
            onUpdate={props.onUpdate}
            />
        ))}
        </Fragment>
    );
}

export default GetProductsId;