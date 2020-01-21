import React, {useState, Fragment } from 'react';
import '../../styles/_CryptoItem.scss';
import Chart from './Chart';
import MainPage from './MainPage';
const CryptoItem = props => {

  return (
    <Fragment>
      {/*clicked ? <Chart name = {props.name}/> : null}*/}
      <li className='crypto-index-item' onClick={()=>{props.onUpdate(props.name)}}>
        <div>
          <h5>{props.name}</h5>
        </div>
        <div className="crypto-mini-chart">
        </div>
        <div>
          <h6>Rate<br></br>{props.price}</h6>
        </div>
      </li>
      </Fragment>
    )
};

export default CryptoItem;
