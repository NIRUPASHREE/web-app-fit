import React, { useState, useEffect } from 'react'
import './CalendarForm.css'
import NavigationBar from '../NavigationBar /NavigationBar'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdb-react-ui-kit'
import axios from 'axios'

function FormApp() {
  const [workouttype, setworkouttype] = useState({ workouttype: null })
  const [starttime, setstarttime] = useState('')
  const [endtime, setendtime] = useState('')
  const [username, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [workoutSchedule, setWorkoutSchedule] = useState([])
  

  const handleSubmit = () => {
    setLoading(true)
    const data = {
      workouttype: workouttype,
      starttime: starttime,
      endtime: endtime,
      username: username,
    }
    console.log(data)
    axios
      .post(
        'http://ec2-52-194-229-242.ap-northeast-1.compute.amazonaws.com:3000/events?',
        null,
        {
          params: {
            username,
            workouttype,
            starttime,
            endtime,
          },
        },
      )
      .then((response) => console.log(response.status))
      .catch((err) => console.log(err))
  }

  const getData = async () => {
    console.log('called')
    await axios
      .get(
        'http://ec2-52-194-229-242.ap-northeast-1.compute.amazonaws.com:3000/events',
        {
          params: {
            username,
          },
        },
      )
      .then((response) => {
        console.log(response.data)
        setWorkoutSchedule(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if(loading === true) {
      getData()
      setLoading(false);
    }
  }, [loading, setLoading])

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className="body">
        <h3 className="h1Schedule">Your Schedule</h3>
        {workoutSchedule.map((item) => {
          return (
            <div className="label">
              <MDBCol sm="6">
                <MDBCard
                  className="BackCard"
                  style={{ maxWidth: '30rem', maxHeight: '16rem' }}
                >
                  <MDBCardBody>
                    <MDBCardTitle className="cardsTitle">
                      Schedule{' '}
                    </MDBCardTitle>
                    <MDBCardText className="cards">
                      <h4 className="cards">WORKOUT: {item.workouttype}</h4>
                      <h4 className="cards">START TIME: {item.starttime}</h4>
                      <h4 className="cards">END TIME: {item.endtime}</h4>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          )
        })}
      </div>
      <div className="body">
        <h1 className="h1Form">Schedule your workout below.</h1>
        <form className="form">
          <div>
            <div>
              <label className="label">Workout</label>
              <select
                required
                className="form-select select"
                id="workouttype"
                value={workouttype}
                onChange={(e) => setworkouttype(e.target.value)}
                aria-label="Default select example"
              >
                <option value>Select Workout</option>
                <option value="Yoga">Yoga</option>x
                <option value="HIIT">HIIT</option>
                <option value="Study Music">Study Music</option>
                <option value="Full Body">Full Body</option>
                <option value="Meditational Music">Meditational Music</option>
                <option value="ABS">ABS</option>
                <option value="Arms">Arms</option>
              </select>
            </div>
            <div className="label">
              <label className="label">Email</label>
              <input
                type="email"
                id="username"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="label">
              <label className="label">Start Time</label>
              <input
                type="datetime-local"
                id="starttime"
                placeholder="Enter Start DateTime"
                value={starttime}
                onChange={(e) => setstarttime(e.target.value)}
              />
            </div>
            <div className="label">
              <label className="label">End Time</label>
              <input
                type="datetime-local"
                id="endtime"
                placeholder="Enter End DateTime"
                value={endtime}
                onChange={(e) => setendtime(e.target.value)}
              />
              <div>
              </div>
            </div>
            <button
              type="submit"
              className="input"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
            {<div className="label"></div>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormApp
