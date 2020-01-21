import React from "react";
import { Line } from "react-chartjs-2";
import '../../styles/_Chart.scss';

class Chart extends React.Component {
  constructor(props){
    super(props)
    this.state={
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
    lineChartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend:{
          display:false
      },
      tooltips: {
        mode: 'label'
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display:false
            },
            display: false
          }
        ],
        yAxes: [{
          gridLines: {
              display:false
          },
          display: false
        }],
      }
    }
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ isLoading: true });
    },100)
    
    const subscribe = {
      type: "subscribe",
      channels: [
        {
          name: "ticker",
          product_ids: [this.props.name]
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
      return <p></p>
    }

  return(
    <div className="chart-face">
        <Line 
        width={600} 
        height={195}
        data={this.state.lineChartData} 
        options={this.state.lineChartOptions} />
      </div>
  );


};
}

export default Chart;

