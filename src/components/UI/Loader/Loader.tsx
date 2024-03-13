import { FunctionComponent } from "react";
import cn from "classnames";
import classes from "./Loader.module.scss";

type Props = {
  className?: string;
};

const Loader: FunctionComponent<Props> = ({ className }) => {
  return <div className={cn([className])}>Loader</div>;
};

export default Loader;
