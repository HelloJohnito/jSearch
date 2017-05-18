import React from 'react';
import MeetupContainer from './meetup/meetup_container';
import EventbriteContainer from './eventbrite/eventbrite_index_container';

const App = (props) => {
  return (
    <div>
      <MeetupContainer />
      <EventbriteContainer />
    </div>
  );
};

export default App;