import React, { useState } from "react";
import classNames from "classnames";
import "./DayListItem.scss"
const DayListItem = (props) => {


  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.full <=0
  });

  const [day, setDay] = useState('')


  return (
    <li onClick={() => props.setDay(props.name)} className={dayListItemClass}>
      <h2>{props.name}</h2>
      <h3>{props.spots} spots remaining</h3>
    </li>
  );
};

export default DayListItem;
