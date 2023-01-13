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

// export const getAppointmentsForDay = ({days, appointments}, day) => {
//   let output = []
//   const dayArray = days.find(item => item.name === day);

//   dayArray.appointments.map(appt => {
//     output.push(appointments[appt]);
//   })
//   return output;
// }


export const getInterview = (state, interview) => {

  // console.log("selector arguments ** interview **", interview)
  // console.log("selector arguments ** state ** ", state)
  let newProps = {};
  if (!interview) {
    return null;
  }
  newProps['student'] = interview.student;
  newProps['interviewer'] = state.interviewers[interview.interviewer]

  return newProps;
}