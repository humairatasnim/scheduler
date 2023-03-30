export function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  for (const stateDay of state.days) {
    if (stateDay.name === day) {
      appointmentArr = stateDay.appointments;
    }
  }
  let appointments = [];
  for (const id of appointmentArr) {
    appointments.push(state.appointments[id])
  }
  return appointments;
}

export function getInterview(state, interview) {
  if (interview) {
    return { interviewer: state.interviewers[interview.interviewer], student: interview.student }
  }
  return null;
};