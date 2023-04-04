import React from 'react'

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import useVisualMode from 'hooks/useVisualMode';

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVE = 'SAVE';
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    return interview;
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === SAVE && (
        <Status 
          message={'Saving...'}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={back}
          onSave={(student, interviewer) => {
            transition(SAVE);
            props.bookInterview(props.id, save(student, interviewer))
              .then(() => {
                transition(SHOW);
              });
            }
          }
        />
      )}
    </article>
  );
}