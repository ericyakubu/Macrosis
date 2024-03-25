import { FunctionComponent, MouseEvent } from "react";
import classes from "./SectionTitle.module.scss";
import cn from "classnames";
import { Icon } from "..";

type Props = {
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
  title: string;
  className?: string;
};

const SectionTitle: FunctionComponent<Props> = ({
  onClick,
  show,
  title,
  className,
}) => {
  return (
    <button
      className={cn(classes.title, className, {
        [classes.title__active]: show,
      })}
      onClick={onClick}
    >
      {title} <Icon icon="arrow-down" size={32} />
    </button>
  );
};

export default SectionTitle;
