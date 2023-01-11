import React from 'react'
import InterviewerListItem from './InterviewerListItem'
import "./InterviewerList.scss"


const InterviewerList = (props) => {

  const interviewerList = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem key={interviewer.id}
        id={interviewer.id}
        avatar={interviewer.avatar}
        name={interviewer.name}
        selected={interviewer.id === props.value}
        onChange={() => props.onChange(interviewer.id)}  
        />
    )

  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerList}</ul>
    </section>
  )
}

export default InterviewerList