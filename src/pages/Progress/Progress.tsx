import { FunctionComponent } from "react";
import classes from "./Progress.module.scss";
import { Timeline } from "@/components";
import ProgressSatisfaction from "./ProgressSatisfaction";
import UpdateWeight from "./UpdateWeight";

//TODO finish this page
const Progress: FunctionComponent = () => {
  return (
    <main className={classes.progress}>
      <Timeline />
      <UpdateWeight />
      <ProgressSatisfaction />
    </main>
  );
};

export default Progress;
