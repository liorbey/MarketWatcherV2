import React from "react";
import { Line } from "react-chartjs-2";
import '../../styles/_Chart.scss';

const Chart = props => {
    
    const lineChartOptions = {
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
    return(
  
      <div className="chart-face">
        <Line 
        width={600} 
        height={195}
        data={props.data} 
        options={lineChartOptions} />
      </div>
        
    )
}

export default Chart;

