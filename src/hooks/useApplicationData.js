import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  const bookInterview = function (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days];
    const dayIndex = days.findIndex(element => element.name === state.day);
    const newSpots = state.days[dayIndex].spots--;
    let day = {};
    if (state.appointments[id].interview) {
      day = {
        ...days[dayIndex],
        spots: newSpots
      };
    } else {
      day = {
        ...days[dayIndex]
      };
    }
    days[dayIndex] = day;

    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState(prev => ({ ...prev, appointments, days }));
    });
  };

  const cancelInterview = function (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = [...state.days];
    const dayIndex = state.days.findIndex(element => element.name === state.day);
    let day = {
      ...state.days[dayIndex],
      spots: (state.days[dayIndex].spots + 1)
    }
    days[dayIndex] = day;

    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, days, appointments });
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then(all => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};

