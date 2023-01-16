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

export const getInterviewersForDay = (state, day) =>
{

  const {days, interviewers, appointments} = state;

  let output = []
  let InterviewerList = []
  const dayArray = state.days.filter(item => item.name === day);

  if (dayArray.length === 0) {
    return []
  }
  dayArray[0].appointments.map(appt => {
    output.push(state.appointments[appt]);
  })

  console.log("The output ********** for day", day, " **** ",  output)

  output.map(appt=>{
    if (appt.interview)
    {
      const interviewer = interviewers[appt.interview.interviewer]
      InterviewerList.push(interviewer)
    }
  })

  return InterviewerList;


  // return result;
  // const interviewersForDay = [];

  // const result = [];

  // const theInterviewers = days.find(interviewer => interviewer.name === day)?.interviewers;

  // theInterviewers && Object.values(interviewers).map(interviewer => {
  //   if (theInterviewers.includes(interviewer.id)) {
  //     interviewersForDay.push(interviewer);
  //   }
  // });

}