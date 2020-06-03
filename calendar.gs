/**
 * Lists 10 upcoming events in the user's calendar.
 */
function listUpcomingEvents() {
  var calendarId = 'primary';
  var optionalArgs = {
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime'
  };
  var response = Calendar.Events.list(calendarId, optionalArgs);
  var events = response.items;
  if (events.length > 0) {
    for (i = 0; i < events.length; i++) {
      var event = events[i];
      var when = event.start.dateTime;
      if (!when) {
        when = event.start.date;
      }
      Logger.log('%s (%s)', event.summary, when);
    }
  } else {
    Logger.log('No upcoming events found.');
  }
}




function createCalendarEvent() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var calendar = CalendarApp.getCalendarsByName('Fernando Castro');
 
var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 20, 1969 21:00:00 UTC'),
    {location: 'The Moon'});
  
  
Logger.log('Event ID: ' + event.getId());
 
 
}



function newEvent() {
  var event = {
    "summary": 'Test',
    "end": {
      "dateTime": "2018-06-12T17:00:00-07:00"
    },
    "start": {
      "dateTime": "2018-06-12T09:00:00-07:00"
    },
    "conferenceData": {
      "createRequest": {
        "conferenceSolutionKey": {
          "type": "hangoutsMeet"
        },
        "requestId": "kdb-atdx-exx"
      }
    }
  };

  Calendar.Events.insert(event, 'primary', {
    "conferenceDataVersion": 1});
}