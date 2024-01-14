import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

// import { Chart } from 'chart.js'
import 'chartjs-adapter-date-fns';

Chart.register(CategoryScale);


const WeightLineChart = ({ chartData }) => {
  return chartData ? (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Weight</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day", // Set the time unit to "day" to display dates
                displayFormats: {
                  day: "dd MM yyyy", // Format for "month day year"
                },
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Weight",
            },
            legend: {
              display: false,
            },
          },
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
    </div>
  ) : null;
};

export default WeightLineChart;