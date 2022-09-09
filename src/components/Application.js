import React, { useState } from "react";

import "components/Application.scss";
import DayList from "components/DayList";
import { days, appointments } from "components/data";
import Appointment from "components/Appointment";

export default function Application(props) {
  const [day, setDay] = useState("Monday");
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
          <DayList
            days={days}
            value={day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {Object.values(appointments).map(appointment => {
          return (
            <Appointment
              key={appointment.id}
              {...appointment}
            />
          );
        })}
      </section>
    </main>
  );
}
