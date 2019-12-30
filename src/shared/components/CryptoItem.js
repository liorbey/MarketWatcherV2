import React, { Fragment } from 'react';
import '../../styles/_CryptoItem.scss';

const CryptoItem = props => {
  return (
      <li className='crypto-index-item'>
        <div>
          <h5>{props.name}</h5>
        </div>
        <div className="crypto-mini-chart">

        </div>
        <div>
          <h6>Rate<br></br>{props.price}</h6>
        </div>
      </li>
    )
};

export default CryptoItem;
