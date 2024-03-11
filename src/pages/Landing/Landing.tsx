import { FunctionComponent } from "react";
import classes from "./Landing.module.scss";
import { Goal, Userchars } from "@/components";
// import { Goal, Piechart, Userchars } from "@/components";

const Landing: FunctionComponent = () => {
  return (
    <main className={classes.landing}>
      <Userchars />
      {/* <Piechart />
      <Userchars />
      <Userchars /> */}
      <Goal />
    </main>
  );
};

export default Landing;
