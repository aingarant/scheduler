import React, { useState, useEffect } from "react";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";
import "components/Application.scss";
import { compileString } from "sass";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
  const { state, setState, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        appointments: all[0].data,
        days: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  console.log("APPLICATION PROOPS ****", props);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments &&
          dailyAppointments.map((appointment) => {
            const interview = getInterview(state, appointment.interview);
            return (
              <Appointment
                key={appointment.id}
                id={appointment.id}
                student={appointment.student}
                onEdit={props.onEdit}
                onDelete={props.onDelete}
                interview={interview}
                bookInterview={bookInterview}
                cancelInterview={cancelInterview}
                interviewers={interviewers}
              />
            );
          })}
        <Appointment time="5pm" />
      </section>
    </main>
  );
}
