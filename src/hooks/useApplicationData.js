import { useEffect, useReducer } from "react";
import axios from "axios";
import { INITIAL_STATE, appReducer } from "reducers";

const useApplicationData = () => {
  // Use Reducer to set intiial state.
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  // Function to update selected day state via Reducer.
  const setDay = day => dispatch({ type: "SET_DAY", payload: { day: day } });

  // Update Spots Function.
  const updateSpots = (appointments) => {
    const dayObj = state.days.find((item) => item.name === state.day);
    const spots = dayObj.appointments.filter(
      (appt) => appointments[appt].interview === null
    ).length;
    const day = { ...dayObj, spots };
    return state.days.map((d) => (d.name === state.day ? day : d));
  };

  // Book Interview Function
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        const days = updateSpots(appointments);
        dispatch({ type: "SET_APPOINTMENT", payload: { appointments, days } })
      });
  };

  // Cancel Interview Function
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      const days = updateSpots(appointments);
      dispatch({ type: "SET_APPOINTMENT", payload: { appointments, days } })
    });
  };
  // Use Effect to Fetch Data from API on Initial Load and set App data state via Reducer Dispatch
  useEffect(() => {
    Promise.all([
      axios.get("/api/appointments"),
      axios.get("/api/days"),
      axios.get("/api/interviewers"),
    ]).then((all) => {

      const [{ data: appointments }, { data: days }, { data: interviewers }] = all;
      dispatch({ type: "SET_APP_DATA", payload: { days, appointments, interviewers } });
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview, updateSpots };
};
export default useApplicationData;