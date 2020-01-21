import React, { useEffect, useRef, useState } from "react";
import CryptoList from "./CryptoList";
import StickyHeader from "../navigation/StickyHeader";
import Chart from './Chart';
import '../../styles/_MainPage.scss';
import AllProducts from "./AllProducts";
import News from '../../news/News';
import axios from 'axios';

const MainPageTwo = () =>{
    const [footerOverFlow, setfooterOverFlow] = useState();
    const [updateGraph, setUpdateGraph] = useState(1100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.addEventListener('scroll', handleScroll);
        };
      });

    const handleScroll= (e) => {
        if (window.scrollY >= 3200 && !footerOverFlow) {
          setfooterOverFlow(true);
        } else if (window.scrollY <= 3200 && footerOverFlow) {
          setfooterOverFlow(false);
        }
      }

      const socket = useRef(new WebSocket("wss://ws-feed.pro.coinbase.com"))

 

      useEffect(()=>{   
        const subscribe = {
            type: "subscribe",
            channels: [
              {
                name: "ticker",
                product_ids: ["BTC-USD"]
              }
            ]
          };
        axios
        .get(socket.current, JSON.stringify.subscribe)
        .then(res=>{
            console.log(res.status)
            const result = res.data.price
            setUpdateGraph(result)
        })

      },[])

      const lineChartData={
        labels: [],
        datasets: [
          {
            type: "line",
            label: "BTC-USD",
            backgroundColor: "white",
            borderColor: "transparent",
            data: [updateGraph]
          },
        ]
      };

    return(
        <div>
        <Chart data={lineChartData}/>
        </div>
    );
}
export default MainPageTwo;

