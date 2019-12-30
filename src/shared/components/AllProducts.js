import React, {useState,useEffect, Fragment} from 'react';
import GetProductsId from './GetProductsId';
import axios from 'axios';



const AllProducts = () => {
    const [products, setProducts] = useState([""])
    const [loading, setLoading] = useState()

    useEffect(()=>{
        setLoading(true);
        axios
          .get('https://api.pro.coinbase.com/products')
          .then(res => {
            const result = res.data.splice(0,5)
            setProducts(result)
            setLoading(false)
        })
          .catch(error => {
            console.log(error);
          });
      },[products])

    return(
        <Fragment>
            {loading &&
            <GetProductsId
            productz = {products}
            />
            }
        </Fragment>
    );
}

export default AllProducts;