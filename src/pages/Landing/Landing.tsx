import { FunctionComponent } from "react";
import classes from "./Landing.module.scss";
import { Goal, Userchars } from "@/components";
import { Button, Icon, Page } from "@/components/UI";

const Landing: FunctionComponent = () => {
  return (
    <Page className={classes.landing}>
      <Userchars />
      <Goal />
      {/* TODO add submittion of information */}
      <Button className={classes.button} type="submit">
        <Icon icon="save" size={32} /> Save
      </Button>
    </Page>
  );
};

export default Landing;
