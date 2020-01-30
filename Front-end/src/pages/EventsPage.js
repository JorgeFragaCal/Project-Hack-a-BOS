import React, { useState, useEffect } from 'react';

import { filterEvents } from '../http/eventService';
import { getEvents } from '../http/eventService';
import { Link } from 'react-router-dom';
import { Selector } from '../components/Selector';
import { Search } from '../components/Search';
export function EventsPage() {
  const [events, setEvents] = useState([]);

  const [city, setCity] = useState('');
  const [skill, setSkill] = useState('');
  // const [data_final, setDateF] = useState("");
  // const [data_start, setDateI] = useState("");

  useEffect(() => {
    filterEvents(city, skill)
      .then(events => {
        setEvents(events);
      })
      .catch(() => {
        setEvents([]);
      });
  }, [city, skill]);

  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
    });
  }, []);

  return (
    <main id='main-page-of-events'>
      <span />
      <section className='aside'>
        <Search text={city} onSearchChange={text => setCity(text)} />
        <Selector type={skill} onSkillChange={e => setSkill(e)} />
      </section>

      <section className=' list-of-events-event-page'>
        {events.map(
          ({
            id,
            title,
            start_date,
            city,
            image,
            email,
            prize,
            web,
            address,
            country
          }) => (
            <section className='event-on-event-page' key={id}>
              <div
                className='image-event-page'
                style={{
                  backgroundImage: `url(${image}`
                }}
              />
              <section id='event-medium-description'>
                <h3>{title}</h3>
                <p>{start_date}</p>
                <p>
                  {' '}
                  {address}
                  {city} {country}
                </p>
                <p href={web}>{web}</p>
                <p>
                  <i className='fa fa-globe fa-fw'> </i>
                  {web}
                </p>
                <p>
                  <i className='fa fa-envelope'> </i>
                  {email}
                </p>
                <p>Prize: {prize} €</p>
                <Link to={`/event/${id}`} className='button-blue'>
                  CHECK IT OUT
                </Link>
              </section>
            </section>
          )
        )}
      </section>
    </main>
  );
}
