import React from "react";
import classNames from "classnames";
import "./DayListItem.scss"

const DayListItem = (props) => {

  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.full <= 0
  });

  const formatSpots = (spots) => {

    if (spots === 0) {
      return "no spots remaining"
    }

    if (spots === 1) {
      return "1 spot remaining"
    }

    return `${spots} spots remaining`
  }


  return (
    <li onClick={() => props.onChange(props.name)} className={dayListItemClass}  selected={props.selected}>
      <h2>{props.name}</h2>
      <h3>{formatSpots(props.spots)}</h3>
    </li>
  );
};

export default DayListItem;
