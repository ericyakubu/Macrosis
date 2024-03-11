import { FunctionComponent, ReactNode } from "react";
import classes from "./Container.module.scss";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <section className={cn([classes.container, className])}>{children}</section>
  );
};

export default Container;
