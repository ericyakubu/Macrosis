import { FunctionComponent } from "react";
import { Container } from "@/components/UI";
import classes from "./Diet.module.scss";
import FoodFilter from "./FoodFilter";

// TODO finish this page

const Diet: FunctionComponent = () => {
  return (
    <main className={classes.container}>
      <Container className={classes.top}>
        <h1 className={classes.top__title}>
          Don't know what to eat? No problem! We got you covered!
        </h1>
        <p className={classes.top__text}>
          You can always select different recepies from our database that will
          suit satisfy your taste buds.
        </p>
        <p className={classes.top__text__premium}>
          If you want to adjust it to fit your macros, build you a customized
          meal plan for the day, follow your diet (vegan, pesceterian, etc).{" "}
          <span className={classes.top__text__premium__bait}>
            You can always upgrade to premium plan!
          </span>
        </p>
      </Container>
      <FoodFilter />
      <Container>recepies</Container>
    </main>
  );
};

export default Diet;
