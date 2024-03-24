import { FunctionComponent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Datepicker.module.scss";
import "./Datepicker.scss";

type Props = {
  handleDate: (date: Date) => void;
};

const Datepicker: FunctionComponent<Props> = ({ handleDate }) => {
  const [selected, setSelected] = useState<Date>(new Date());
  return (
    <div className={classes.container}>
      <DatePicker
        selected={selected}
        // onChange={(date) => setStartDate(date)}
        onChange={(date) => {
          if (
            date instanceof Date &&
            date.setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)
          ) {
            handleDate(date);
            setSelected(date);
          }
        }}
      />
    </div>
  );
};

export default Datepicker;
