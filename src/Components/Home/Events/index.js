import React from 'react';

import { Tag } from '../../ui/misc';

const EventsHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag
            bck="#0e1731"
            size="45px"
            color="#ffffff"
            add={{
                color:'lightBlue'
            }}
        >
            First event
        </Tag>

        BLOCK

        <Tag
            bck="#ffffff"
            size="22px"
            color="#0e1731"
            link={true}
            linkto="/the_events"
        >
            Ver más eventos
        </Tag>
      </div>
    </div>
  )
}

export default EventsHome;

