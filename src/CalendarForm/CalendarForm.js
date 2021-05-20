import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarForm.css';
import NavigationBar from '../NavigationBar /NavigationBar';

function FormApp() {
  const [register, setRegister] = useState({
    workoutType: null,
  });

  const handleChange = e => {
    setRegister({
      ...register,
      workoutType: e.target.value,
    });
  };

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div class='body'>
        <form
          class='form'
          onSubmit={ () => onSubmit({ 
            workoutType: register.workoutType,
            startTime: startDate,
            endTime: endDate,
          })}
        >
          <div>
            <div>
              <label class='label' htmlFor='Workout'>
                Workout
              </label>
              <select
                class='form-select select'
                onChange={handleChange}
                aria-label='Default select example'
              >
                <option value>Select Workout</option>
                <option value='Yoga'>Yoga</option>
                <option value='HIIT'>HIIT</option>
                <option value='Study Music'>Study Music</option>
                <option value='Full Body'>Full Body</option>
                <option value='Meditational Music'>Meditational Music</option>
                <option value='ABS'>ABS</option>
                <option value='Arms'>Arms</option>
              </select>
            </div>
            <div>
              <label class='label'>Start Time</label>
              <DatePicker
                htmlFor='startDate'
                selected={startDate}
                onChange={date => setStartDate(date)}
                placeholderText='MM/DD/YYYY, HH:MM'
                showTimeSelect
                dateFormat='Pp'
              />
            </div>
            <div>
              <label class='label'>End Time</label>
              <DatePicker
                htmlFor='endDate'
                selected={endDate}
                onChange={date => setEndDate(date)}
                placeholderText='MM/DD/YYYY, HH:MM'
                showTimeSelect
                dateFormat='Pp'
              />
            </div>

            <input class='input btn' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormApp;
