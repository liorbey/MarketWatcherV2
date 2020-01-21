import React, {useState,useEffect, Fragment} from 'react';
import GetProductsId from './GetProductsId';
import axios from 'axios';



const AllProducts = props => {
    const [products, setProducts] = useState([""])
    const [loading, setLoading] = useState()

    useEffect(()=>{
        setLoading(true);
        axios
          .get('https://api.pro.coinbase.com/products')
          .then(res => {
            const result = res.data.splice(0,30)
            setProducts(result)
            setLoading(false)
        })
          .catch(error => {
            console.log(error);
          });
      },[setProducts])

    return(
        <Fragment>
            <GetProductsId
            productz = {products}
            onUpdate={props.onUpdate}
            />
        </Fragment>
    );
}

export default AllProducts;