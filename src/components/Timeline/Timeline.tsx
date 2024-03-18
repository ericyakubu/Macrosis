import { FunctionComponent } from "react";
import classes from "./Timeline.module.scss";
import { Container } from "../UI";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// TODO fix the chart

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      // tension: 0.1, for curve
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  // scales: {
  //   y: {
  //     min: 0,
  //     max: 100,
  //   },
  //   x: {
  //     min: 0,
  //     max: 100,
  //   },
  // },
};

const Timeline: FunctionComponent = () => {
  return (
    <>
      <Container className={classes.container}>
        <Line
          data={data}
          options={options}
          className={classes.container__chart}
          // {...props}
        />
      </Container>
    </>
  );
};

export default Timeline;
