import React from "react";
import CryptoList from "./CryptoList";
import StickyHeader from "../navigation/StickyHeader";
import Chart from './Chart';
import '../../styles/_MainPage.scss';
import AllProducts from "./AllProducts";
import News from '../../news/News';

class MainPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      footerOverflow: true,
      price: [],
      isLoading: false,
      lineChartData: {
      labels: [],
      datasets: [
        {
          type: "line",
          backgroundColor: "transparent",
          pointBackgroundColor: "transparent",
          pointBorderColor: "rgb(255,255,255,0.1)",
          pointHoverBackgroundColor: "white",
          pointHoverBorderColor	: "white",
          borderColor: "#0000ff",
          
          data: []
        }
      ]
    },
    }
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    if (window.scrollY >= 3200 && !this.state.footerOverflow) {
      this.setState({ footerOverflow: true });
    } else if (window.scrollY <= 3200 && this.state.footerOverflow) {
      this.setState({ footerOverflow: false });
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ isLoading: true });
    },300)
    const subscribe = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: ["BTC-USD"]
        }
      ]
    };

    this.ws = new WebSocket("wss://ws-feed.pro.coinbase.com");

    this.ws.onopen = () => {
      this.ws.send(JSON.stringify(subscribe));
    };

    this.ws.onmessage = e => {
      const value = JSON.parse(e.data);
      if (value.type !== "ticker") {
        return;
      }

      const oldBtcDataSet = this.state.lineChartData.datasets[0];
      const newBtcDataSet = { ...oldBtcDataSet };
      newBtcDataSet.data.push(value.price);

      const newChartData = {
        ...this.state.lineChartData,
        datasets: [newBtcDataSet],
        labels: this.state.lineChartData.labels.concat(
          new Date().toLocaleTimeString()
        )
      };
      this.setState({ lineChartData: newChartData, isLoading: false });

      this.setState({price: value.price})
    };
  }

  componentWillUnmount() {
    this.ws.close();
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>one second!</p>
    }

  return(
    <div>
      <StickyHeader/>
      <section className="user-home" onScroll={this.handleScroll}>
          <main onScroll={this.handleScroll} >
          <div >
            <Chart data={this.state.lineChartData}/>
            <News/>
            </div>
          </main>
          <aside className = "crypto-names-container">
            <div className={this.state.footerOverflow ? "crypto-names overflow" : "crypto-names"}>
              <h4 className= "heading" >Watchlist</h4>
                  {/*<Search className="heading"/>*/}
                      <AllProducts/>
            </div>
        </aside>
      </section>
    </div>

  );


};
}

export default MainPage;