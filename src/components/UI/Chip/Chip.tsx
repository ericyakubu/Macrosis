import { FunctionComponent, ReactNode, MouseEvent } from "react";
import classes from "./Chip.module.scss";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Chip: FunctionComponent<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={cn([classes.chip, className])}>
      {children}
    </button>
  );
};

export default Chip;
