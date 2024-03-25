import { FunctionComponent, ReactNode } from "react";
import classes from "./Chip.module.scss";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const Chip: FunctionComponent<Props> = ({ children, className }) => {
  return <div className={cn([classes.chip, className])}>{children}</div>;
};

export default Chip;
