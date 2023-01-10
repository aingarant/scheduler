import React from "react";

const DayListItem = (props) => {
  const {dayName, daysRemaning, daySelected} = props;

  const handleSelect  = () =>
  {

  }
  return (
    <li>
      <h2 className="text--regular">Day Name</h2>
      <h3 className="text--light">X spots remaining</h3>
    </li>
  );
};

export default DayListItem;
