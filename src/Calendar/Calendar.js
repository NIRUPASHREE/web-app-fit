import React from 'react';
import './Calendar.css';
import NavigationBar from '../NavigationBar /NavigationBar';


function Calendar() {
  //var gapi = window.gapi

  /* 
    Update with your own Client Id and Api key 
  */
  var CLIENT_ID =
    '403274114230-dej6s6daaabpva6tcp2k6sdqlhaq0rhp.apps.googleusercontent.com';
  var API_KEY = 'AIzaSyAGcPOgL_bUkCC7r2k9fw_vPzmdGjR0MvA';
  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

  const handleClick = () => {
    window.gapi.load('client:auth2', () => {
      console.log('loaded client');

      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      window.gapi.client.load('calendar', 'v3', () => console.log('bam!'));

      window.gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: 'Asia Workout',
            location: 'Classmethod',
            description: 'Hard Workout',
            start: {
              dateTime: '2021-05-12T09:00:00+05:30',
              timeZone: 'Asia/Kolkata',
            },
            end: {
              dateTime: '2021-05-12T17:00:00+05:30',
              timeZone: 'Asia/Kolkata',
            },
            recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
            attendees: [{ email: 'adarshjain.ad@gmail.com' }],
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
              ],
            },
          };

          var request = window.gapi.client.calendar.events.insert({
            calendarId: 'fqvud3i1jspqm5to715nkrhavs@group.calendar.google.com',
            resource: event,
          });

          request.execute(event => {
            console.log(event);
            //window.open(event.htmlLink)
          });

          /*
            Uncomment the following block to get events
        */

          //get events
          window.gapi.client.calendar.events
            .list({
              calendarId:
                'fqvud3i1jspqm5to715nkrhavs@group.calendar.google.com',
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: 'startTime',
            })
            .then(response => {
              const events = response.result.items;
              console.log('EVENTS: ', events);
            });
        });
    });
  };

  return (
    <div>
      <NavigationBar />

      <div className='Calendar'>
        <header className='Calendar-header'>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<iframe src="https://calendar.google.com/calendar/embed?src=fqvud3i1jspqm5to715nkrhavs%40group.calendar.google.com&ctz=Asia%2FKolkata" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>',
            }}
          />
          <p>Click to add event to Google Calendar</p>
          <button style={{ width: 100, height: 50 }} onClick={handleClick}>
            Add Event
          </button>
        </header>
      </div>
    </div>
  );
}

export default Calendar;
