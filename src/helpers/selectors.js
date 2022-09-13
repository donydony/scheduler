export function getAppointmentsForDay(state, day) {
  const result = [];
  const foundDay = state.days.find(element => element.name === day);
  if (foundDay) {
    for (let appointment of foundDay.appointments) {
      result.push(state.appointments[appointment]);
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

export function getInterviewersForDay(state, day) {
  const result = [];
  const foundDay = state.days.find(element => element.name === day);
  if (foundDay) {
    for (let interviewer of foundDay.interviewers) {
      result.push(state.interviewers[interviewer]);
    }
  }
  return result;
};