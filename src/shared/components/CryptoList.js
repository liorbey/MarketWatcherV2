import React, { Fragment } from 'react';
import CryptoItem from './CryptoItem';

const CryptoList = (props) => {
    return (
            <Fragment>
                <CryptoItem
                price={props.price}
                name = {props.name}
                onUpdate={props.onUpdate}
                />
           </Fragment>
    );
  };
  
  export default CryptoList;
  