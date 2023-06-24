import React from "react";
import "./DataChart.css";
import { Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function DataChart() {
  const data = {
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Sales",
        data: [200, 390, 200, 300, 210],
        borderColor: "#E9A0A0",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0,
        hoverBackgroundColor: "blue",
        hoverBorderColor: "blue",
      },
      {
        label: false,
        data: [103, 410, 150, 440, 190],
        backgroundColor: "white",
        borderColor: "#9BDD7C",
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: false,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
        grid: {
          drawBorder: false,
        },
      },
    },
    layout: {
      padding: {
        top: 60,
        right: 30,
        bottom: 20,
        left: 30,
      },
    },
    labels: {
      color: "#858585",
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
    },
  };
  return (
    <div className="chart">
      <div className="chart-above">
        <div className="activities">
          <h4>Activites</h4>
          <p>
            May-June 2021 <FontAwesomeIcon icon={faAngleDown} />
          </p>
        </div>
        <div className="legend">
          <div className="dot1">
            <div className="dot-1"></div>
            <div className="p">Guest</div>
          </div>
          <div className="dot2">
            <div className="dot-2"></div>
            <div className="p">User</div>
          </div>
        </div>
      </div>
      <Line
        className="line"
        data={data}
        options={options}
        width={"1230px"}
        height={"380px"}
      ></Line>
    </div>
  );
}

export default DataChart;
