import { FunctionComponent } from "react";
import classes from "./Piechart.module.scss";
import { PieChart } from "react-minimal-pie-chart";
import { Container } from "../UI";
const data = [
  { title: "Protein", value: 10, color: "#E38627" },
  { title: "Carbs", value: 15, color: "#C13C37" },
  { title: "Fat", value: 20, color: "#6A2135" },
];

const Piechart: FunctionComponent = () => {
  return (
    <Container className={classes.container}>
      <PieChart className={classes.pieChart__chart} animate data={data} />
      <ul className={classes.pieChart__labels}>
        {data.map((macro) => (
          <li className={classes.pieChart__label} key={`macro-${macro.title}`}>
            <span style={{ background: macro.color }} />
            {macro.title}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Piechart;
