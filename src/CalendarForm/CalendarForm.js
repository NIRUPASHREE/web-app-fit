import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarForm.css';
import NavigationBar from '../NavigationBar /NavigationBar';

const axios = require('axios')
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
    //alert(JSON.stringify(data));
    
    axios.post('ec2-52-194-229-242.ap-northeast-1.compute.amazonaws.com:3000/events', {
      workouttype: register.workoutType,
      starttime: startDate,
      endtime: endDate,
  })
  .then(function (response) {
    console.log(response);
  })
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className='body'>
        <form
          className='form'
          onSubmit={ () => onSubmit({ 
            workouttype: register.workoutType,
            starttime: startDate,
            endtime: endDate,
          })}
        >
          <div>
            <div>
              <label className='label' htmlFor='Workout'>
                Workout
              </label>
              <select
                className='form-select select'
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
              <label className='label'>Start Time</label>
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
              <label className='label'>End Time</label>
              <DatePicker
                htmlFor='endDate'
                selected={endDate}
                onChange={date => setEndDate(date)}
                placeholderText='MM/DD/YYYY, HH:MM'
                showTimeSelect
                dateFormat='Pp'
              />
            </div>

            <input className='input btn' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormApp;
