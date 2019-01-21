import React from 'react';

import Featured from './Featured';
import Events from './Events';
import MeetPlayers from './MeetPlayers';

const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Events/>
            <MeetPlayers/>
        </div>
    )
}

export default Home;