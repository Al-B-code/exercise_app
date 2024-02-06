import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "../../styles/WeightChartContainer.css"

// import { Chart } from 'chart.js'
import 'chartjs-adapter-date-fns';

Chart.register(CategoryScale);


const WeightLineChart = ({ chartData }) => {
  return chartData ? (
    <div className="weight-chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Weight Progress</h2> */}
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date'
              },
              type: "time",
              time: {
                unit: "day", // Set the time unit to "day" to display dates
                displayFormats: {
                  day: "dd-MM-yy", // Format for "month day year"
                },
              },
              ticks: {
                // autoSkip: true,
                // maxTicksLimit: 10,
            }
            },
            y: {
              title: {
                display: true,
                text: 'Weight (Kg)'
              }
            },
          },
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          plugins: {
            title: {
              display: true,
              text: "Weight Progress",
            },
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  ) : null;
};

export default WeightLineChart;