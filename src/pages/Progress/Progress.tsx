import { FunctionComponent } from "react";
import classes from "./Progress.module.scss";
import { Timeline } from "@/components";

//TODO finish this page
const Progress: FunctionComponent = () => {
  return (
    <main className={classes.progress}>
      <Timeline />
    </main>
  );
};

export default Progress;
