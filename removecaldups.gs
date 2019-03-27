function removeDuplicateCalenderEvents() {
var now = new Date();
var days = 60
var daysFromNow = new Date(now.getTime() + (days * 24 * 60 * 60 * 1000));
var events = CalendarApp.getDefaultCalendar().getEvents(now, daysFromNow);
Logger.log('Number of events: ' + events.length);
for (var i = 1; i < events.length; i++) {
  var evprev = events[i-1];
  var evcur = events[i];
  if(evcur.getStartTime().getDay()==evprev.getStartTime().getDay() && evcur.getTitle()==evprev.getTitle())
  {
    Logger.log('Deleting same Event: ' + evcur.getTitle());
    Logger.log('Deleting same Event: ' + evcur.getStartTime());
    evcur.deleteEvent();
  }
  
  }
}
