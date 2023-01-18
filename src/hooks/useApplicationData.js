import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const updateSpots = (appointments) => {

    // day object.
    const dayObj = state.days.find(item => item.name === state.day);

    // empty slots.
    const spots = dayObj.appointments.filter(
      (appt) => appointments[appt].interview === null
    ).length;

    const day = {...dayObj, spots}

    return state.days.map(d => d.name === state.day ? day : d)
  };

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
        setState({ ...state, appointments, days });
      });
  };

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
      setState({ ...state, appointments, days });
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/appointments"),
      axios.get("/api/days"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        appointments: all[0].data,
        days: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview, updateSpots };
};

export default useApplicationData;
