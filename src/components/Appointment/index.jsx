import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Emtpy";
import Form from "./Form";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";

const Appointment = (props) => {
  return (
    <article className="appointment">
      <Header time={props.time} />

      {props.interview ? (
        <Show
          student={props.student}
          interviewer={props.interviewer}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
};

export default Appointment;
