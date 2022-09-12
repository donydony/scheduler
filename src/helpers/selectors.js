export function getAppointmentsForDay(state, day) {
  const result = [];
  for (let dayo of state.days) {
    if (dayo.name === day) {
      for (let appointment of dayo.appointments) {
        result.push(state.appointments[appointment]);
      }
    }
  }
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const newInterview = {};
  newInterview["student"] = interview.student;
  const interviewer = state.interviewers[interview.interviewer];
  newInterview["interviewer"] = interviewer;
  return newInterview;
};