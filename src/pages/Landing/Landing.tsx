import { FunctionComponent } from "react";
import classes from "./Landing.module.scss";
import { Goal, Userchars } from "@/components";
import { Button, Icon } from "@/components/UI";

const Landing: FunctionComponent = () => {
  return (
    <main className={classes.landing}>
      <Userchars />
      <Goal />
      <Button className={classes.button}>
        <Icon icon="save" size={32} /> Save
      </Button>
    </main>
  );
};

export default Landing;
