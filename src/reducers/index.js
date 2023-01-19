export const INITIAL_STATE = {
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {},
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_DAY":
      return {
        ...state,
        day: action.payload.day
      };

    case "SET_APPOINTMENT":
      return {
        ...state,
        appointments: action.payload.appointments,
        days: action.payload.days,
      }

    case "SET_APP_DATA":
      return {
        ...state,
        appointments: action.payload.appointments,
        days: action.payload.days,
        interviewers: action.payload.interviewers,
      };

    default:
      return {
        state
      }
  }
}