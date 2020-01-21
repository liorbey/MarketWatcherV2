import React, { useEffect, useState } from "react";
import CryptoList from "./CryptoList";
import StickyHeader from "../navigation/StickyHeader";
import Chart from './Chart';
import '../../styles/_MainPage.scss';
import AllProducts from "./AllProducts";
import News from '../../news/News';


const MainPage = () =>{
  const [footerOverFlow, setfooterOverFlow] = useState();
  const [cryptoName, setcryptoName] = useState("BTC-USD")
  const [propChanged, setpropChanged] = useState(true)
  const [propChangedTwo, setpropChangedTwo] = useState(true)  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
        window.addEventListener('scroll', handleScroll);
    };
  });

  const handleScroll= (e) => {
    if (window.scrollY >= 300 && !footerOverFlow) {
      setfooterOverFlow(true);
    } else if (window.scrollY <= 300 && footerOverFlow) {
      setfooterOverFlow(false);
    }
  }


  const onUpdate = (val) => {
    setcryptoName(val);
    setpropChanged(!propChanged);
  };
    
  return(
    <div>
      <StickyHeader/>
      <section className="user-home">
          <main onScroll={handleScroll} >
          <div >
            { propChanged && <Chart name = {cryptoName}/>}
            <News/>
            </div>
          </main>
          <aside className = "crypto-names-container">
            <div className={footerOverFlow ? "crypto-names overflow" : "crypto-names"}>
              <h4 className= "heading">Watchlist</h4>
                  {/*<Search className="heading"/>*/}
                      <AllProducts onUpdate={onUpdate}/>
              <p className= "buttom-note">Realtime charts are processed based off buy & sell orders. Due to a lack of liquidity, & small order books - some instruments may take a while to load.</p>
            </div>
        </aside>
      </section>
    </div>

  );

}

export default MainPage;