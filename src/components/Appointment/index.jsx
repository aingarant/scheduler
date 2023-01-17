import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Emtpy";
import Form from "./Form";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";

const Appointment = (props) => {
  console.log("APPOINTMENT PROPS", props);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING";
  const ERROR_SAVE = "ERROR WHILE SAVING";
  const ERROR_DELETE = "ERROR WHILE SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // props.interview ? useVisualMode(SHOW) : useVisualMode(EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE, true);
      });
  };

  const cancel = () => {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((error) => {
        transition(ERROR_DELETE, true);
      });
  };

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          interview={props.bookInterview}
        />
      )}

      {mode === CONFIRM && (
        <Confirm message={"Are you sure?"} onCancel={back} onConfirm={cancel} />
      )}

      {mode === DELETING && <Status message={"Deleting..."} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => {
            transition(EDIT);
          }}
          onDelete={() => {
            transition(CONFIRM);
          }}
        />
      )}

      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      )}

      {mode === SAVING && <Status message={"Saving"} />}
      {mode === ERROR_SAVE && <Status message={"Error while saving."} />}
      {mode === ERROR_DELETE && <Status message={"Error while deleting."} />}
    </article>
  );
};

export default Appointment;
