import { FunctionComponent } from "react";
import classes from "./Timeline.module.scss";
// import { PieChart } from "react-minimal-pie-chart";
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

// const data = [
//   { title: "Protein", value: 10, color: "#E38627" },
//   { title: "Carbs", value: 15, color: "#C13C37" },
//   { title: "Fat", value: 20, color: "#6A2135" },
// ];

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
        {/* <PieChart className={classes.pieChart__chart} animate data={data} />
      <ul className={classes.pieChart__labels}>
        {data.map((macro) => (
          <li className={classes.pieChart__label} key={`macro-${macro.title}`}>
            <span style={{ background: macro.color }} />
            {macro.title}
          </li>
        ))}
      </ul> */}
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
