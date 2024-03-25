import { FunctionComponent } from "react";
import classes from "./Section.module.scss";
import { SectionTitle } from "@/components/UI";
import cn from "classnames";

type Props = {
  title: string;
  show: boolean;
  onClick?: () => void;
  list?: {
    name: string;
    amount: string;
  }[];
  className?: string;
  steps?: string[];
};

const Section: FunctionComponent<Props> = ({
  title,
  show,
  onClick,
  list,
  className,
  steps,
}) => {
  // TODO make styling better
  return (
    <div className={cn([classes.section, className])}>
      <SectionTitle title={title} show={show} onClick={onClick} />
      <ul className={classes.section__list}>
        {!!list &&
          list.map((item) => (
            <li key={item.name} className={classes.section__list__item}>
              <span>{item.amount}</span> {item.name}
            </li>
          ))}
        {!!steps &&
          steps.map((step, index) => (
            <li
              key={`step-${index}`}
              className={cn([
                classes.section__list__item,
                classes.section__list__item_steps,
              ])}
            >
              <span>{index + 1}</span> {step}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Section;
