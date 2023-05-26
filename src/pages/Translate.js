import React from 'react'

import '../App.css';

import NavBar from '../components/NavBar'
import TranslateMenu from '../components/TranslateMenu';

import EventsOn from './translate/events/EventsOn';
import EventsOff from './translate/events/EventsOff';

function Translate() {
  return (
    <div>
      <NavBar />
      <div className='tile2'>
        {/* <TranslateMenu/> */}
        <div className='translate-main'>
          <EventsOn/>
          <EventsOff/>
        </div>
      </div>
    </div>
  )
}

export default Translate;
