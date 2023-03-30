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