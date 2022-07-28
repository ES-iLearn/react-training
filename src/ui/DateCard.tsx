import { FunctionComponent } from "react";
import './DateCard.css';

interface DateCardProps {
  date: Date;
}

const DateCard: FunctionComponent<DateCardProps> = (props) => {
  const getDateParsed = () => {
    const month = props.date.toLocaleDateString("en-US", { month: "short" });
    const year = props.date.toLocaleDateString("en-US", { year: "2-digit" });
    const day = props.date.toLocaleDateString("en-US", { day: "2-digit" });

    return { day, month, year };
  };

  const dateInfo = getDateParsed();

  return (
    <div className="bug-date">
      <div className="bug-date__month">{dateInfo.month} '{dateInfo.year}</div>
      <div className="bug-date__day">{dateInfo.day}</div>
    </div>
  );
};

export default DateCard;
