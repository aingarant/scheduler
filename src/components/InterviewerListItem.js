import React from 'react'
import classNames from "classnames";
import "./InterviewerListItem.scss"

const InterviewerListItem = (props) => {

  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });


  return (
    <li onClick={()=>{props.setInterviewer(props.name)}} className="interviewers__item">
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      {props.selected ? <>Sylvia Palmer</> : null}
    </li>
  )
}

export default InterviewerListItem