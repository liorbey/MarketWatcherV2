import React, {useState,useEffect, Fragment} from 'react';
import CryptoList from './CryptoList';
import axios from 'axios';;

const ProductPrices = props => {
    const [price, setPrice] = useState();
    const [loading, setLoading] = useState()

    useEffect(()=>{
        setLoading(true)
        axios
          .get(`https://api.pro.coinbase.com/products/${props.productID}/ticker`)
          .then(res => {
            const result = res.data.price;
            
            setPrice(result)
            setLoading(false)
          })
          .catch(error => {
            console.log(error);
          });

      },[])

    return(
        <Fragment>
        {!loading && <CryptoList onUpdate={props.onUpdate} price={price} name = {props.productID}/>}
        </Fragment>
    );
}

export default ProductPrices;