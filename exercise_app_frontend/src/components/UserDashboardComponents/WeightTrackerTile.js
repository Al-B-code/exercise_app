import WeightLineChart from "./WeightLineChart";
import { useEffect, useState } from "react";

const WeightTrackerTile = ( { dailyEntries } ) => {

    // console.log(dailyEntries);


    const [chartData, setChartData] = useState(null);


    useEffect(() => {
        if (dailyEntries && dailyEntries.length > 0) {
            console.log(dailyEntries)
            formatDataForChart();
            console.log(chartData)
        }
        


    }, [dailyEntries])


    const formatDataForChart = () => {
        setChartData({
        labels: dailyEntries.map((dailyEntry) => new Date(dailyEntry.date)),
        datasets: [
            {
                label: "Weight",
                data: dailyEntries.map((dailyEntry) => dailyEntry.weight),
            }
        ]
    })
}

    
    
    
    
    return (

        <>
        <p>Hello from WeightTrackerTile</p>
        <WeightLineChart chartData={chartData}/>
        </>

    );
}
 
export default WeightTrackerTile;