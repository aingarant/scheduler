import InterviewerList from "components/InterviewerList";

export const getAppointmentsForDay = (state, day) => {
  let output = []
  const dayArray = state.days.filter(item => item.name === day);

  if (dayArray.length === 0) {
    return []
  }
  dayArray[0].appointments.map(appt => {
    output.push(state.appointments[appt]);
  })
  return output;
}
export const getInterview = (state, interview) => {

  let newProps = {};
  if (!interview) {
    return null;
  }
  newProps['student'] = interview.student;
  newProps['interviewer'] = state.interviewers[interview.interviewer]

  return newProps;
}

export const getInterviewersForDay = (state, day) =>
{

  const dayItem = state.days.find(item => item.name === day);

  if (!dayItem) {
    return []
  }
  return dayItem.interviewers.map(interviewerId => state.interviewers[interviewerId])

}