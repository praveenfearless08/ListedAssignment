import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "./Circle.css";

function Circle() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: ["Super Hoodies", "Custom Short Pants", "Basic Tees"],
          datasets: [
            {
              data: [14, 31, 55],
              backgroundColor: ["#EE8484", "#F7DC7D", "#98D89E"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, []);

  return (
    <>
      <canvas ref={chartRef}></canvas>
    </>
  );
}

export default Circle;
