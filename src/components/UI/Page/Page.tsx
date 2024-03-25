import { FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import classes from "./Page.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

const Page: FunctionComponent<Props> = ({ children, className }) => {
  return <main className={cn([classes.page, className])}>{children}</main>;
};

export default Page;
