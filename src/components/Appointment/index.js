import React from 'react'

import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from 'components/Appointment/Confirm';
import Error from 'components/Appointment/Error';
import useVisualMode from 'hooks/useVisualMode';

import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVE = 'SAVE';
  const CONFIRM = 'CONFIRM';
  const DELETE = 'DELETE';
  const EDIT = 'EDIT';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';
  
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
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === SAVE && (
        <Status 
          message={'Saving...'}
        />
      )}
      {mode === DELETE && (
        <Status 
          message={'Deleting...'}
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
              })
              .catch(() => {
                transition(ERROR_SAVE, true);
              });
            }
          }
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={'Are you sure you want to cancel the appointment?'}
          onConfirm={() => {
            transition(DELETE, true);
            props.cancelInterview(props.id)
              .then(() => {
                transition(EMPTY);
              })
              .catch(() => {
                transition(ERROR_DELETE, true);
              });
            }
          }
          onCancel={back}
        />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={(student, interviewer) => {
            transition(SAVE);
            props.bookInterview(props.id, save(student, interviewer))
              .then(() => {
                transition(SHOW);
              })
              .catch(() => {
                transition(ERROR_SAVE, true);
              });
            }
          }
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message={'There was an error when saving the appointment. Please try again.'}
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
        message={'There was an error when cancelling the appointment. Please try again.'}
        onClose={back}
        />
      )}
    </article>
  );
}