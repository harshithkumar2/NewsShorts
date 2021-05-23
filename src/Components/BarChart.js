import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  const datas = props.data;
  return (
    <div
      style={{
        maxWidth: "70vh",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Bar
        data={{
          labels: ["Active Cases", "Recovered", "Deaths"],
          datasets: [
            {
              label: "Covid-19 Active Statistics",
              data: [datas.activeCasesNew, datas.recoveredNew, datas.deathsNew],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
