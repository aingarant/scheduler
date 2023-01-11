import React from 'react'
import classNames from "classnames";
import "./InterviewerListItem.scss"

const InterviewerListItem = (props) => {

  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li onClick={props.onChange} className={interviewerListItemClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? <>{props.name}</> : null}
    </li>
  )
}

export default InterviewerListItem